const button = `<div>
<button id = "info-button" class="btn btn-primary"
data-toggle="modal" data-target="#exampleModalLong"> <img src = "https://feathericons.com/node_modules/feather-icons/dist/icons/plus.svg"> </button>
</div>
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content" id = "mod-content">
    <div class="modal-header">
      <h1 id = "title" class="display-4"></h1>
      <button type="button" id = "close-button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul id = "list-content" class="list-group">
      </ul>
    </div>
  </div>
</div>
</div>
`;

const ubaha = `<li class="list-group-item" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
Chain Attacks
</li>
<div class="collapse" id="collapseExample">
<div class="card card-body">
  <p>
    <ul class="list-group list-group-flush">
    <li class="list-group-item"> <b> Reginleiv </b> : 100-65% Multi-hit random element damage to random allies </li>
    <li class="list-group-item"> <b> Daedalus Wing </b> : N 100%－80% OD 100%－80% 3000 Wind damage to all allies.Gain Uplifted </li>
    <li class="list-group-item list-group-item-warning"> <b> Virtuous Verse: </b> N 65%－ TR Earth damage to one ally and switches them with a backline ally. </li>
    <li class="list-group-item list-group-item-warning"> <b> The Rage </b>: OD 50%－ TR 50% Light damage to all allies. inflict Purging Light </li>
    <li class="list-group-item list-group-item-danger">  <b> Deadly Flare </b>: OD TR 25% Multi-hit Fire damage to random allies. Last hit deals ~700,000 Fire damage
                    Inflicts Collapsed and Burned remove all buffs on allies </li>
    <li class="list-group-item"> <b> Dark Hour </b> TR 20% switches to Dark Hour remove all debuffs on Ultmate Bahamut </li>
    <li class="list-group-item"> <b> Divine Voice </b>: N 20%  Earth damage to all allies inflict ATK DOWN DEF DOWN TA DOWN DA DOWN </li>
    <li class="list-group-item list-group-item-danger"> <b>Ultima Blast </b>: N 20%－ TR 12% Random element damage to all allies and removes all buffs. </li>
    <li class="list-group-item list-group-item-danger"> <b>Skyfall Ultimus </b> OD 20%－ TR 5%: 999,999 Dark damage to all allies. 3 Hit plain damage to an ally each turn </li>
    </ul>
  </p>
</div>
</div`;

const notExist = `<div class="card card-body">
<p>
<h1> NOT AVAILABLE AT THE MOMENT </h1>
</p>
</div>`;

let infoMap = new Map();

infoMap.set("Ultimate Bahamut", ubaha);
