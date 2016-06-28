$(document).ready(function(){
    $(".inputButton").click(function(){
        $(".randomSpellInfo").html(function(){
          var spells = [
            "The caster's head shreds open and a fountain of blood towers out of their kneeling body. The blood is thick and viscous and shifts into surprising palettes of colour, it splatters and spreads across the roof, there are things in it. They reach out with breaking joints before slopping to the floor and reforming as something else, they give birth to things which consume them and crawl towards you with a scream that is a gurgle then float to the roof like a drop of water watched in reverse.",

            "A dripping ball of smouldering black sludge consumes your heart, burning a hole through your chest. You still live. When you deal damage the sludge consumes half the Hit Points, also transferring them to you if you are wounded. It grows bigger and hotter, slopping out of your chest cavity and slapping against your stomach. When you take damage the sludge is diminished by an equal amount. When it reaches 25HP it begins to beg for more blood, more carnage, making a d8 attack of its own if exposed in combat. If it reaches 50HP it will envelop and slowly digest your body while regenerating your flesh, using you like a magical fission reactor to power its hysterical killing spree.",

            "	The Ocean. When you are wounded your body gushes saltwater instead of blood, tiny translucent organisms and vibrant crustaceans you never imagined writhe about on the floor. If you are killed your body will burst and release hundreds of gallons of ocean water.",

            "Everything goes dark, you lose sight of the walls, your companions are around you with shining white eyes, they rend and tear at your flesh, stuffing their mouths, not even chewing in their haste to fill their bellies, your attempts to fight back pass through them like a shadow. Your companions find themselves sitting in a circle around the place where you last stood with distended bellies and blood soaked hands and mouths. The only remaining trace of the caster is a wax-sealed skull sitting in their midst",

            "Snake birthing pit. Your throat expands and they begin to slide out of your mouth, your stomach splits open and piles of them slop to the floor, offspring slime out of their wombs and reach adulthood almost as fast as they are born, in turn giving birth to their own young, they slither across the floor in an ever expanding pile of writhing flesh and scales.",

            "Your flesh bubbles into bulbous purple mounds, becoming a hive for long-legged beetles which seem to glide rather than crawl. Your consciousness now resides in the beetles, not your ruined hive of a body.  You can no longer be healed. As long as the beetles aren't wiped out they will repopulate at 1d4 HP per hour, repairing the body completely every day. If the beetles abandon the body entirely it takes 3 times as long to secrete a new one, or they can infest a corpse and convert it at the normal rate. When outside a body the beetles only have AC10 but take half damage from anything other than area attacks. You are a single consciousness split into many parts, when part of you is lost your thoughts become erratic and confused. Intelligence is decreased for every HP of beetles lost, down to a minimum of 6 until the beetles repopulate.",

            "One of the caster's eyes pops from their head and a crimson serpent slithers from the socket holding the eye within its mouth. The serpent coils and rears up, staring at those around it. The dry leaf whisper in their minds asks them what they wish of it. Any wish granted by the serpent decreases the caster's HP by 1, but this isn't obvious aside from the growing flow of blood from their empty eye socket. If the caster reaches 0HP they fall and dash against the ground into a pile of dust. After a number of weeks has passed equal to HP lost by the caster anything bestowed by the serpent will turn to blood, either literally or figuratively.",

            "The flesh of your stomach begins to twist inwards. It continues to churn into your body until a spiralling tunnel gapes between your ribs and stomach, seen from the front it seems to extend at least 30' into your body. The twisting flesh of the tunnel emits a faint blue glow, and at the end nothing can be seen but whispy tendrils of darkness. You feel phantom stomach cramps of hunger around the recently dead. Any recently killed flesh placed within the spiral is drawn gently inward and floats along its length until it disappears in darkness, and soon afterwards d10 gold coins of an antiquity no one can place clatter out of your belly. Once 400 coins have emerged, the thing inside is satisfied with the flesh offerings and the host's body is stretched and turned and curled backward around the spiral tunnel, forming grotesque screaming ever widening rolls of flesh as the tendrils of darkness are drawn ever closer to the surface until it erupts and fills the room with glowing blue flesh and darkness, corrupting minds and bodies with enlightenment.",

            "Another, naked you falls away from you to the floor, like a photograph being moved away from another, strands of pus and membrane string between you. There is a 50% chance that the naked one is actually the caster. If the caster is killed and the Other is not, inform the player after the session who they are. If the Other is allowed to stay with the party they will be friendlier than ever, and will become steadfastly loyal to whoever shows the most interest in a true friendship. Once they have made a true friend they will want to be near them always, and one night while their friend sleeps by their side the Other's jaw will dislocate and stretch, and they will try to swallow their friend whole.",

            "You lift into the air and d4 limbs tear themselves away from your body. Flesh rips and tendons snap, you watch as the limbs dissolve in mid air as if being digested before you drop to the floor.",

            "Every night for the next 2 weeks you come to your senses next to the blue moonlit water, even if there was no water nearby when you went to sleep, save vs. Magic to resist stepping in. Every night you get closer to her/him/whatever you find most attractive before waking up soaking wet in the morning light. On the 6th night you enter the water they will embrace you and consume your flesh with translucent echidna-quill teeth.",

            "You keep seeing a shadow in your peripheral vision but when you turn it's never there. As soon as it can get you alone this damp ashy shadow doppelgänger will try to kill you. It wants to be you. The real you. It has the same Ability Scores as you, gains a shadow version of any item that you take in your hand, and has +2 AC, it's mostly incorporeal, and it wants to change that. It would rather not injure you, preferring to strangle or choke you with its fist. If the doppelgänger kills you it will split you open and eat your organs before wiggling into its new flesh. Your new flesh. Re-roll your Ability Scores while you get settled into your new body. Skills, spells and memories are inherited.",

            "Save vs. Poison. If successful spend the next 2d6 rounds vomiting up an egg sac. Otherwise, congratulations! You are now pregnant with godflesh. You want to share this blessing with everyone. Especially your friends. While they sleep.",

            "Save vs. Magic. If successful the caster takes 2d4 damage and a random insanity. Otherwise, after the session inform the player that their consciousness has been consumed and replaced by the projected consciousness of a lurking fear. From now on they will continue to assist in the party's goals, but do their best to draw them towards the horror's physical form.",

            "The caster's mind switches place with that of a random enemy, or if no enemies are present, that of a man-sized putrid pink anthropomorphic toadbeast that claws its way out of the ground. The caster retains their spellcasting abilities.",

            "The scent of rotting cabbage wafts through the air within 30' of the caster. Save vs. Poison. Those who fail shake and sweat as if with a fever and become violently uncontrollable for the next d4 turns (each rolls separately).",

            "A plant grows in the caster's stomach. One night per week d3 dry black tendrils emerge from the caster's orifices and bear glossy plump deep purple fruit. In the centre of the fruit is a small black multi-limbed figure in a foetal position, of the same consistency as the fruit. If the caster has been acting immorally the fruit is sweet and grants increased Strength, Dexterity and Intelligence, with a 25% chance of addiction. If the caster has been acting morally the fruit tastes of ash and salt and induces extreme paranoia and jealousy.",

            "A dog runs into the area, if you were attacking someone it immediately latches onto them. He's just the cutest most loyal little dog ever yes he is. Anyone else that looks at it sees its fur shivering and shaking while its head splits open and the monkey skull within screams at them.",

            "Everyone within view of the caster must save vs. Magic. Those who fail begin to give birth through their mouths, umbilical cord and placenta and all. The foetus is them. If they kill it there are no consequences, if they allow it to live it will leech a year of their life every day, growing visibly older. If they eat the child, increase a random ability score by 1. Do this again for every day the child has lived.",

            "Everything in a 5' radius around the caster is liquefied into a foul-smelling orange pus. Including the floor, their hair, and everything they are wearing. Researching spells the caster had already learned only takes half as long as usual. There's a 50% chance that living beings completely caught in the sphere will retain their sentience despite liquefying into pus.",

            "Oil spews from your lips and as you fall to your knees coughing and hacking. You are unable to take actions for 1d4 hours.",

            "For the next minute, you can see any invisible creature if you have line of sight to it.",

            "A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears 1 minute later.",

            "You cast fireball as a 3rd-level spell centered on yourself.",

            "You cast magic missile as a 5th-level spell.",

            "Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.",

            "You cast confusion centered on yourself.",

            "For the next minute, you regain 5 hit points at the start of each of yourt turns.",

            "You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face.",

            "You cast grease centered on yourself.",

            "Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.",

            "Your skin turns a vibrant shade of blue. A remove curse spell can end this effect.",

            "An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight.",

            "For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action.",

            "You teleport up to 60 feet to an unoccupied space of your choice that you can see.",

            "You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.",

            "Maximize the damage of the next damaging spell you cast within the next minute",

            "Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.",

            "1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet in front of you and are frightened of you. They vanish after 1 minute.",

            "You regain 2d10 hit points.",

            "You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.",

            "For the next minute, you can teleport up to 20 feet as a bonus action in each of your turns.",

            "You cast levitate on yourself.",

            "A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later.",

            "You can’t speak for the next minute. Whenever you try, Black oily bubbles float out of your mouth.",

            "A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to magic missile.",

            "You are  immune to being intoxicated by alcohol for the next 5d6 days.",

            "Your hair falls out and is replaced with grass & vines within 24 hours. ",

            "For the next minute, any flammable object you touch that isn’t being worn or carried by another creature bursts into flame.",

            "You regain your lowest-level expended spell slot.",

            "For the next minute you must shout when you speak.",

            "You cast fog cloud centered on yourself.",

            "Up to three creatures you choose within 30 feet of you take 4d10 lightning damage.",

            "You are frightened by the nearest creature until the end of your next turn",

            "Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.",

            "You gain resistance to all damage for the next minute.",

            "A random creature within 60 feet of you becomes poisoned for 1d4 hours.",

            "You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn",

            "You cast polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell’s duration.",

            "Illusory wasps and hornets buzz in the air within 10 feet of you for the next minute",

            "You can take one additional action immediately.",

            "Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt",

            "You cast mirror image.",

            "You cast fly on a random creature within 60 feet of you.",

            "You become invisible for the next minute. During that time, other creatures can’t hear you. The invisibility ends if you attack or cast a spell.",

            "If you die within the next minute, you immediately come back to life as if by the reincarnate spell.",

            "Your size increases by one size category for the next minute",

            "You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute.",

            "You are surrounded by faint, ethereal music for the next 1d4 hours",

            "You gain the ability to consume your own fingernails as if they were fruit of a goodberry spell.",

            "Your hair turns bone white.",

            "Over the next 2d6 days you grow mouths on the palms of each hand. A remove curse can end this effect.",

            "For the next hour, you can comprehend all languages but can only speak abyssal.",

            "Summon eight swarms of rats.",

            "For the next minute, all non-magical organic things you touch rot, metal rusts, and food spoils.",

            "You can cast animate dead on any corpse within a mile.",

            "You see all reflections of youself as if you were a rotting corpse.",

            "You suddenly become aware of the horrible truth... Your left eye is a parasite sapping your life slowly. You must tear it out.",

            "You cast inflict wounds on yourself. The next spell you cast deals max damage.",

            "For the next 1d4 rounds, maggots fall from your mouth whenever you try to speak.",

            "You cast your next sepll at the next highest spell level, but take damage equal to the level it was cast.",

            "You are chilled and your teeth chatter uncontrollably, giving your disadvantage on concentration for the next hour.",

            "For 1d4 hours, you skin become dry and scaly. Your AC cannot be below 16 for the duration.",

            "You teleport 40 feet, bursting into a flock of ravens that reform at the location of arrival.",

            "You can 1d10 temporary hit points. When the temporary HP has been lost, your skin begins to shed like a snake.",

            "For the next minute your face becomes pale, your lips become blue, and you may cast ray of frost as a bonus action.",

            "Over the next 2d6 days, your ears, nose and lips rot off, giving you disadvantage to persuation, checks and advantage to inimidate checks.",

            "The next time you sleep or meditate, you are addlicted with horrible nightmares or visions. You wake up from long rests with 1d6 damage.",

            "You sprout a useless and twisted malformed arm from your side. You can hack it off for 3d6 damage.",

            "A tentacle bursts from your stomach dealing 2d6 necrotic damage to you and a creature of your choice.",

            "Over the next 2d6 days you grow a stubby, fleshy, vestigial tail and wings. You can hack them off for 3d6 damage.",

            "Over the next 2d6 days, your left arm becomes gelatinous and flexible until it becomes a tentacle.",

            "You instantly infect yourself, and all within 30' with bog blight.",

            "Over the next 2d6 days, you grow a face on the back of your head that is a warped and useless copy of your own.",

            "For the next 2d6 days you smell like rotting meat.",

            "Your touch becomes painful to others, like the sting of nettles.",

            "Worms erupt from your flesh and knit togeather your wounds. Regain 2d10 hp.",

            "Your skin becomes semi-translucent making your veins and muscles visible.",

            "For 1d4 hours, your eyes become a milky white and you go blind.",

            "A ghoul under your controll rises from the earth. It ceases to be controlled by you in 1d4 hours.",

            "You become fightened for 1d4 rounds.",

            "Your teeth grow longer, sharper, and more canine. You pant when you breathe. A remove curse spell can end this effect.",

            "For the next hour you can speak with the dead on all corpses you touch.",

            "All creatures ina  30' cone in front of you are frightened for 1 round. Your eyes become solid black for 1d4 hours.",

            "Your mind fills with hateful and evil whispers. You take 5d4 psychotic damage.",

            "For the next 2d6 days, you feel compelled to hack up the body of any creature you kill. Take 1d4 psychotic damage each time you kill a creature.",

            "For 1d4 hours, whenever you take damage, a spider crawls from the wound under your controll.",

            "You not longer age, require food, drink, or air.",

            "For 1d4 hours, your tongue becomes a centipede. You may speak all languages for the duration.",

            "You may read other peoples minds for 1d6 days. If you choose to read their mind take 1d4 damage instantly.",

            "You rapidly gain 3d6 pounds and an equal number of temporary hit points.",

            "You deal 1d10 necrotic damage to all creatures within 30' of you and gain that much health.",

            "For 1d4 hours, whenever you are damaged by necrotic damage, you are instead healed by the same amount.",

            "Age 1d10 years and regain all expended spell slots."
          ];
          var randomSelection = Math.floor(Math.random() * spells.length);
          return spells[randomSelection];
        });
    });
});
