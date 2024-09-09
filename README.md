# DeliverooDashboard

## What is DeliverooDashboard?

[Deliveroo.js](https://github.com/unitn-ASA/Deliveroo.js) is an educational game developed for the course of Automonous Software Agents at the University of Trento, **DeliverooDashboard** is a barebone implementation of the debugging dashboard used in our project [GlovoJS](https://github.com/lorenzoorsingher/GlovoJS). Visualizing the game state in real-time proved to be very useful for debugging errors and understanding the agents' behavior.

## Project Structure

```
DeliverooDashboard
├── dashboard
│   ├── multi_dashboard.html
│   └── server.js
├── data
│   └── field.js
├── images
│   └── ...
├── main.js
├── index.js
├── package.json
└── README.md
```

## Implementation & Usage

For the dashboard we used socket.io to create a simple server in order to display real-time data from the game. All the files you need are in the directory `dashboard`, to use it in your project just copy the files and import the server in your main file.

To communicate with the server wrap the data you want to send in a dictionary and use

```javascript
dashboard.emitMessage("map", dash_data);
```

In our implementation the `dash_data` is shaped like:

```javascript
{
  map_size: [map.width, map.height],
  tiles: update_map,
  riders: riders_data,
  parc: dash_parcels,
}
```

Where `map_size` is the size of the map, `tiles` is matrix of dicts that describe the type of tile: **W** for walkable, **D** for delivery zone and **X** if empty. `parc` is a list of the parcels in the game and `riders` is a list of your agents with this structure:

```javascript
{
      x: rider.x,
      y: rider.y,
      plan: [plan_move, plan_pickup, plan_drop],
      parcels: rider_parcels,
      blk_agents: blk_agents,
}
```

`x` and `y` are the coordinates of the agent, `parcels` is a list of the parcels the agent is carrying, `blk_agents` is a list of the tiles that are blocked by other agents sensed by the agent and `plan`, as the name suggests, is the plan of the agent. In our case we have split the plan into the list of tiles where the agent has to move, the list of tiles where the agent will perform a pickup and the list of tiles where the agent will perform a drop.

This is just an example and the way it was convenient for us to display the data, you can change the structure of the data you send to the server as you like, just remember to edit the html file accordingly.

In `main.js` we have provided an example of how to use the dashboard in your project with some hardcoded mock data, to correctly visualize the example run it on the map _challenge_23_.

## Dashboard

To connect to the dashboard open `localhost:3001` on your browser. If you are running multiple instances of the game on the same machine, remember to use different port numbers for each dashboard. You can change the port number when creating the server object:

```javascript
const PORT = 3001;
const dashboard = new MyServer(PORT);
```

<p align="center">
<img src="images/dashboard.gif" style="display:block;float:none;margin-left:auto;margin-right:auto;width:60%"/>
</p>

- Each agent is color coded and their plans are displayed in the same color palette

- Free parcels are represented by **yellow** tiles with the score in the middle

- If a parcel is supposed to be picked up by an agent, the tile will be colored **light green**

- The tile corresponding to the plan's drop location is colored in **orange**

- Enemy agents are represented by **purple** tiles

- Delivery zones are colored in **red**

- At the bottom, the parcels currently being carried by your agents are displayed in separate columns

## Authors

- [@lorenzoorsingher](https://github.com/lorenzoorsingher)
- [@Edomenegaz](https://github.com/Edomenegaz)
- [GitHub repo](https://github.com/lorenzoorsingher/DeliverooDashboard)
