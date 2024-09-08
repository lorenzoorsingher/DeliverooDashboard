console.log("Starting...");
import { Field } from "./data/field.js";
import { Position } from "./data/position.js";
import { MyServer } from "./dashboard/server.js";
import { DeliverooApi } from "@unitn-asa/deliveroo-js-client";

export const VERBOSE = false;

const PORT = 3001;

const dashboard = new MyServer(PORT);

const map = new Field(); // contains the game map
const parcels = new Map(); // contains all non-carried parcels
let map_init = false;
const client = new DeliverooApi("http://localhost:8080/?name=rider", "");

// load map
client.onMap((width, height, tiles) => {
  VERBOSE && console.log("Map received. Initializing...");

  //init map only once
  if (!map_init) {
    map.init(width, height, tiles);
    map_init = true;
  }
});

// DASHBOARD UPDATE
setInterval(() => {
  //organize all the logging data to be sent to the dashboard
  let update_map = map.getMap();
  let riders_data = [];

  riders.forEach((rider) => {
    let plan_move = [];
    let plan_pickup = [];
    let plan_drop = [];
    let rider_parcels = [];

    if (rider.plan.length > 0) {
      for (const p of rider.plan) {
        const [pos, type] = p;
        switch (type) {
          case "M":
            plan_move.push(pos);
            break;
          case "P":
            plan_pickup.push(pos);
            break;
          case "D":
            plan_drop.push(pos);
            break;
        }
      }
    }

    for (const [key, p] of rider.carrying) {
      rider_parcels.push({ key: key, reward: p });
    }

    let blk_agents = [];

    riders_data.push({
      x: rider.x,
      y: rider.y,
      plan: [plan_move, plan_pickup, plan_drop],
      parcels: rider_parcels,
      blk_agents: blk_agents,
    });
  });

  let dash_parcels = [
    { x: 7, y: 12, reward: 10 },
    { x: 15, y: 8, reward: 20 },
  ];

  let dash_data = {
    map_size: [map.width, map.height],
    tiles: update_map,
    riders: riders_data,
    parc: dash_parcels,
  };

  dashboard.emitMessage("map", dash_data);
}, 100);

//
//
//
//
//
// MOCK DATA for the agents --------------------------------------------------------
let mock_agent_1 = {
  x: 0,
  y: 0,
  plan: [],
  plan_bkp: [
    ["6-9", "M"],
    ["6-8", "M"],
    ["6-7", "P"],
    ["6-6", "M"],
    ["5-6", "M"],
    ["5-5", "M"],
    ["5-4", "P"],
    ["5-3", "M"],
    ["5-2", "M"],
    ["5-1", "M"],
    ["5-0", "D"],
  ],

  carrying: [
    ["parcel_1", 10],
    ["parcel_2", 20],
  ],
  pos: 0,
};

let mock_agent_2 = {
  x: 0,
  y: 0,
  plan: [],
  plan_bkp: [
    ["2-9", "M"],
    ["2-10", "M"],
    ["2-11", "P"],
    ["2-12", "M"],
    ["1-12", "M"],
    ["0-12", "D"],
  ],

  carrying: [
    ["parcel_1", 10],
    ["parcel_2", 20],
  ],
  pos: 0,
};
let riders = [mock_agent_1, mock_agent_2];

// UPDATE MOCK RIDERS
setInterval(() => {
  riders.forEach((rider) => {
    rider.plan = rider.plan.slice(1);
    if (rider.plan.length == 0) {
      rider.plan = rider.plan_bkp.slice();
    }
    rider.x = parseInt(rider.plan[0][0].split("-")[0]);
    rider.y = parseInt(rider.plan[0][0].split("-")[1]);
  });
}, 500);
//-----------------------------------------------------------------------------------
