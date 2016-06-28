$(document).ready(function(){
    $(".inputButton").click(function(){
        $(".randomSpellInfo").html(function(){
          var spells = [
            "	The caster's head shreds open and a fountain of blood towers out of their kneeling body. The blood is thick and viscous and shifts into surprising palettes of colour, it splatters and spreads across the roof, there are things in it. They reach out with breaking joints before slopping to the floor and reforming as something else, they give birth to things which consume them and crawl towards you with a scream that is a gurgle then float to the roof like a drop of water watched in reverse.",

            "	A dripping ball of smouldering black sludge consumes your heart, burning a hole through your chest. You still live. When you deal damage the sludge consumes half the Hit Points, also transferring them to you if you are wounded. It grows bigger and hotter, slopping out of your chest cavity and slapping against your stomach. When you take damage the sludge is diminished by an equal amount. When it reaches 25HP it begins to beg for more blood, more carnage, making a d8 attack of its own if exposed in combat. If it reaches 50HP it will envelop and slowly digest your body while regenerating your flesh, using you like a magical fission reactor to power its hysterical killing spree.",

            "	The Ocean. When you are wounded your body gushes saltwater instead of blood, tiny translucent organisms and vibrant crustaceans you never imagined writhe about on the floor. If you are killed your body will burst and release hundreds of gallons of ocean water.",

            "Everything goes dark, you lose sight of the walls, your companions are around you with shining white eyes, they rend and tear at your flesh, stuffing their mouths, not even chewing in their haste to fill their bellies, your attempts to fight back pass through them like a shadow. Your companions find themselves sitting in a circle around the place where you last stood with distended bellies and blood soaked hands and mouths. The only remaining trace of the caster is a wax-sealed skull sitting in their midst",

            "Snake birthing pit. Your throat expands and they begin to slide out of your mouth, your stomach splits open and piles of them slop to the floor, offspring slime out of their wombs and reach adulthood almost as fast as they are born, in turn giving birth to their own young, they slither across the floor in an ever expanding pile of writhing flesh and scales.",

            "Your flesh bubbles into bulbous purple mounds, becoming a hive for long-legged beetles which seem to glide rather than crawl. Your consciousness now resides in the beetles, not your ruined hive of a body.  You can no longer be healed. As long as the beetles aren't wiped out they will repopulate at 1 HP per round, repairing the body completely every day. If the beetles abandon the body entirely it takes 3 times as long to secrete a new one, or they can infest a corpse and convert it at the normal rate. When outside a body the beetles only have AC10 but take half damage from anything other than area attacks. You are a single consciousness split into many parts, when part of you is lost your thoughts become erratic and confused. Intelligence is decreased for every HP of beetles lost, down to a minimum of 6 until the beetles repopulate.",

            "One of the caster's eyes pops from their head and a crimson serpent slithers from the socket holding the eye within its mouth. The serpent coils and rears up, staring at those around it. The dry leaf whisper in their minds asks them what they wish of it. Any wish granted by the serpent decreases the caster's HP by 1, but this isn't obvious aside from the growing flow of blood from their empty eye socket. If the caster reaches 0HP they fall and dash against the ground into a pile of dust. After a number of weeks has passed equal to HP lost by the caster anything bestowed by the serpent will turn to blood, either literally or figuratively.",

            "The flesh of your stomach begins to twist inwards. It continues to churn into your body until a spiralling tunnel gapes between your ribs and stomach, seen from the front it seems to extend at least 30' into your body. The twisting flesh of the tunnel emits a faint blue glow, and at the end nothing can be seen but whispy tendrils of darkness. You feel phantom stomach cramps of hunger around the recently dead. Any recently killed flesh placed within the spiral is drawn gently inward and floats along its length until it disappears in darkness, and soon afterwards d10 gold coins of an antiquity no one can place clatter out of your belly. Once 400 coins have emerged, the thing inside is satisfied with the flesh offerings and the host's body is stretched and turned and curled backward around the spiral tunnel, forming grotesque screaming ever widening rolls of flesh as the tendrils of darkness are drawn ever closer to the surface until it erupts and fills the room with glowing blue flesh and darkness, corrupting minds and bodies with enlightenment. The flesh of anyone in the immediate vicinity erupts in unimaginable constantly changing new forms while their minds expand into unreachable levels of consciousness even as everything they were as a person implodes.",

            "Another, naked you falls away from you to the floor, like a photograph being moved away from another, strands of pus and membrane string between you. There is a 50% chance that the naked one is actually the caster. If the caster is killed and the Other is not, inform the player after the session who they are. If the Other is allowed to stay with the party they will be friendlier than ever, and will become steadfastly loyal to whoever shows the most interest in a true friendship. Once they have made a true friend they will want to be near them always, and one night while their friend sleeps by their side the Other's jaw will dislocate and stretch, and they will try to swallow their friend whole.",

            "	You lift into the air and d4 limbs tear themselves away from your body. Flesh rips and tendons snap, you watch as the limbs dissolve in mid air as if being digested before you drop to the floor.",

            "Every night for the next 2 weeks you come to your senses next to the blue moonlit water, even if there was no water nearby when you went to sleep, save vs. Magic to resist stepping in. Every night you get closer to her/him/whatever you find most attractive before waking up soaking wet in the morning light. On the 6th night you enter the water they will embrace you and consume your flesh with translucent echidna-quill teeth.",

            "You keep seeing a shadow in your peripheral vision but when you turn it's never there. As soon as it can get you alone this damp ashy shadow doppelgänger will try to kill you. It wants to be you. The real you. It has the same Ability Scores as you, gains a shadow version of any item that you take in your hand, and has +2 AC, it's mostly incorporeal, and it wants to change that. It would rather not injure you, preferring to strangle or choke you with its fist. If the doppelgänger kills you it will split you open and eat your organs before wiggling into its new flesh. Your new flesh. Re-roll your Ability Scores while you get settled into your new body. Skills, spells and memories are inherited.",

            "Save vs. Poison. If successful spend the next 2d6 rounds vomiting up an egg sac. Otherwise, congratulations! You are now pregnant with godflesh. You want to share this blessing with everyone. Especially your friends. While they sleep.",

            "Save vs. Magic. If successful the caster takes 2d4 damage and a random insanity. Otherwise, after the session inform the player that their consciousness has been consumed and replaced by the projected consciousness of a lurking fear. From now on they will continue to assist in the party's goals, but do their best to draw them towards the horror's physical form.",

            "The caster's mind switches place with that of a random enemy, or if no enemies are present, that of a man-sized putrid pink anthropomorphic toadbeast that claws its way out of the ground. The caster retains their spellcasting abilities.",

            "The scent of rotting cabbage wafts through the air within 30' of the caster. Save vs. Poison. Those who fail shake and sweat as if with a fever and become violently uncontrollable for the next d4 turns (each rolls separately).",

            "	A plant grows in the caster's stomach. One night per week d3 dry black tendrils emerge from the caster's orifices and bear glossy plump deep purple fruit. In the centre of the fruit is a small black multi-limbed figure in a foetal position, of the same consistency as the fruit. If the caster has been acting immorally the fruit is sweet and grants increased Strength, Dexterity and Intelligence, with a 25% chance of addiction. If the caster has been acting morally the fruit tastes of ash and salt and induces extreme paranoia and jealousy.",

            "A dog runs into the area, if you were attacking someone it immediately latches onto them. He's just the cutest most loyal little dog ever yes he is. Anyone else that looks at it sees its fur shivering and shaking while its head splits open and the monkey skull within screams at them.",

            "	Everyone within view of the caster must save vs. Magic. Those who fail begin to give birth through their mouths, umbilical cord and placenta and all. The foetus is them. If they kill it there are no consequences, if they allow it to live it will leech a year of their life every day, growing visibly older. If they eat the child, increase a random ability score by 1. Do this again for every day the child has lived.",

            "Everything in a 5' radius around the caster is liquefied into a foul-smelling orange pus. Including the floor, their hair, and everything they are wearing. Researching spells the caster had already learned only takes half as long as usual. There's a 50% chance that living beings completely caught in the sphere will retain their sentience despite liquefying into pus.",

            "Oil spews from your lips and as you fall to your knees coughing and hacking. You are unable to take actions for 1d4 hours."

            //Add sorc wild magic spells.
            //Add dark wild magic spells.
          ];
          var randomSelection = Math.floor(Math.random() * spells.length);
          return spells[randomSelection];
        });
    });
});
