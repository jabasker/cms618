var metadata = { title: "A Tale of Two Narratives", author: "Jonah Baskerville", date: "2020",
instructions: "A first attempt at creating two stories which run in parallel, where the retrograde of one is the anterograde of the other.",
};

// PLACES first
place.home = new Place("the", "home");
place.floor = new Place("the", "floor");
place.party = new Place("the", "party");
place.bed = new Place("the", "bed");
place.home.addView(place.floor, "the floor");
place.home.addView(place.bed, "the bed");

// ACTORS next
actor.man = new Actor("the", "man", spatial.of, actor.cosmos, pronoun.masculine);
actor.woman = new Actor("the", "woman", spatial.of, actor.cosmos, pronoun.feminine);

// THINGS next
thing.ring = new Thing("a", "ring", spatial.in, place.home);
thing.music = new Thing("the", "music", spatial.in, place.party);
thing.smile = new Thing("a", "smile", spatial.of, actor.man);
thing.smile.owner = actor.man;

// Finally, EVENTS
var FALL = new Event(thing.ring, "fall", "to the floor");
var DISCUSS = new Event("TODO");
var TALK = new Event("TODO");
var DEPART = new Event("TODO");
var DEAFEN = new Event(thing.music, "is deafen + ing");
var DANCE = new Event("TODO");
var CHARM = new Event(thing.smile, "is charm +ing");
var LEAVE = new Event(actor.woman, "leave", "excitedly");
var WAKE = new Event(actor.woman, "wake", spatial.in, place.bed);

var READ = new Event(actor.teller, "read", thing.slip);
var SNOOZE = new Event(actor.guard, "sleep +ing");
var COUNT = new Event(actor.teller, "recheck", thing.slip);
clock += 50;
var COVER_FACE = new Event(actor.robber, "wear", thing.mask);
COVER_FACE.changeState(thing.mask, spatial.of, actor.robber, spatial.on, actor.robber);
COVER_FACE.setTemplate("[agent/s] [put/v] on [object/o]");
var TYPE = new Event(actor.teller, "type");
var PLAY = new Event(actor.teller, "play");
PLAY.setTemplate("[agent/s] [play/v] Solitaire a bit on [agent's] computer");
var BEGIN_ROBBING = new Event(actor.robber, "enter");
BEGIN_ROBBING.changeState(actor.robber, spatial.in, place.street, spatial.in, place.lobby);
BEGIN_ROBBING.setTemplate("[agent/s] [leave/v] the street");
var WAVE = new Event(actor.teller, "wave", actor.robber);
WAVE.setTemplate("[agent/s] [wave/v] to [object/o]");
var THREATEN = new Event(actor.robber, "threaten", actor.teller, temporal.using, thing.fake_gun);
var LAUGH = new Event(actor.teller, "laugh");
var WAKE = new Event(actor.guard, "wake");
var SEE_THREAT = new Event(actor.guard, "see", actor.robber);
SEE_THREAT.setSense("sight");
var LEAVE_POST = new Event(actor.guard, "leave");
LEAVE_POST.changeState(actor.guard, spatial.in, place.guard_post, spatial.in, place.lobby);
LEAVE_POST.setTemplate("[agent/s] [leave/v] the guard post");
var GRAB_FAKE = new Event(actor.teller, "put", thing.fake_money, temporal.into, thing.bag);
GRAB_FAKE.changeState(thing.fake_money, spatial.in, place.vestibule, spatial.into, thing.bag);
var TURN = new Event(actor.robber, "turn", actor.guard);
TURN.setTemplate("[agent/s] [turn/v] to [object/o]");
var SHOOT_1 = new Event(actor.guard, "shoot", actor.robber);
SHOOT_1.setTemplate("[agent/s] [shoot/v] [object/o] in the chest");
var SHOOT_2 = new Event(actor.guard, "shoot", actor.robber);
SHOOT_2.setTemplate("[agent/s] [shoot/v] [object/o] in the chest");
var FALL = new Event(actor.robber, "fall");
var DIE = new Event(actor.robber, "die");
var SHOOT_2 = new Event(actor.guard, "shoot", actor.robber);
var DROP_GUN = new Event(actor.guard, "drop", thing.pistol);
DROP_GUN.reconfigures(thing.pistol, "owner", actor.guard, null);
var CRY = new Event(actor.teller, "weep");
var STARE = new Event(actor.guard, "stare at", thing.pistol);

var world = new World(place, actor, thing, eventSeq);

function run() {
    var spin = getParameters(world.actor);
    narrate(metadata, spin, world);
};