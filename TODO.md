## TODO

- [x] Define interfaces
- [x] Implement actions data structure
- [x] Implement actions actuation
- [x] Implement dashboard
- [x] Implement planner
- [x] Improve reasoning to pick up multiple parcels instead of delivering asap
- [x] Stop going after parcels that have already been delivered
- [x] Anytime the agent steps on a parcel, pick it up
- [x] Anytime the agent steps on a delivery zone, deliver
- [x] (kinda) Prevent moving to unreachable tiles
- [x] Contain all planning inside the brain
- [x] Make sure planner doesnt miss new or previously discovered parcels
- [x] Planner must consider other agent's positions
- [x] Planner must make sure agent can get unstuck
- [x] Make sure planner doesnt forget he's carrying parcels when replanning
- [x] Double check for closest delivery point

- [x] Make sure agent knows how much (and how many parcels) he can carry when replanning
- [x] Penalize overly long paths
- [x] make sure agent forgets parcels left in memory when the tile comes back in view and the parcel is gone

- [x] Make sure agent doesnt crash when NO plan is found (og no parcels, no delivery zones, no reachable tiles)

- [x] reimplement agent blocking logic

- [x] fix crossover for multiple agents
- [x] make sure player_parcels are handled correctly in the planner
- [x] make sure parcels are correctly memorized
- [x] fix bfs crashing when position is not round
- [x] penalize too many plan changes
- [x] check if carried parcels are correcly evaluated when replanning
- [x] rework parcels clock
- [x] figure out why agent crashes when 2-action long backup plan is created and after consuming action

- [x] make sure it's possible to generate a plan with delivery only in case one agent has parcels
- [x] fix the stuff about fitness in delivery only
- [x] rethink logic when it's time to replan (due to delivery or plan end)

- [x] fix dashboard now highlighting all the parcels to be picked up
- [x] fix plans swapping between agents (might be an indexing issue)
- [x] make sure a valid plan is created if one agent has no reachable parcels
- [x] make sure in geneticTSP when one rider has no nodes (so zero genes) it doesn't happen that a random plan is generated for ALL riders.
- [x] fix agent not seeing (?) parcel when in the same cell (might be due to delayed replanning OR too short bfs)

- [ ] fix order of parcels in plan generation
- [x] add caching system for bfs
- [ ] make sure cache doesn't get too big
- [ ] penalize riders that don't deliver for too long (exp in case of non-decaying parcels)
- [ ] add replanning when parcels are stolen
- [x] clean code
- [x] search&destroy legacy variables
- [x] reimplement parcel decay in fitness
- [x] is the dummy_parcel in builGraphInOut even needed? (might be a leftover from the old implementation)
- [x] make sure chances are computed correctly in rouletteWheel, in particular in case of negative fit (for the moment I set a lower bound for fitness as -Infinity screws with the probabilities and removed the rounding of the chances) THIS MUST BE VERIFIED
- [x] dynamically change STEP_COST and penalities based on the config
- [ ] exponential decay for metrics might not be that beneficial
- [x] reimplement parcels clock

- [x] revert back graph building to the old version
- [x] getClosestDeliveryZones and getRandomSpawnable still use normal bfs

- [x] parcel paths BFSs are duplicated
- [x] fix bfs_pddl not different between different paths

- [x] also getClosestDeliveryZones must be updated to use the new parallelized
- [x] add range to filter parcels in BFS
- [x] add range to filter delivery zones in BFS
- [ ] add range for agents in the caching system
