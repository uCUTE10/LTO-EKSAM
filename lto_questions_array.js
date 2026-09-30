const allQuestions = [
  [
    "The three colors of the traffic lights are:",
    [
      "red, green and yellow",
      "red, green and blue",
      "yellow, green and blue"
    ],
    0
  ],
  [
    "Yellow triangular signs provide what kind of information",
    [
      "warning",
      "hospital across",
      "speed limit"
    ],
    0
  ],
  [
    "Which of the following traffic signs are blue?",
    [
      "regulatory signs",
      "information signs",
      "danger warning signs"
    ],
    1
  ],
  [
    "Steady green light means",
    [
      "you must yield to all pedestrians and other motorists using the intersection",
      "go, it is safe to do so",
      "proceed cautiously through the intersection before the light changes to red."
    ],
    1
  ],
  [
    "A flashing yellow light at a road crossing signifies",
    [
      "Caution - slow down and proceed with caution",
      "Stop and stay until light stops flashing",
      "Wait for the green light"
    ],
    0
  ],
  [
    "A solid white line on the right edge of the highway slopes in towards your left. This shows that",
    [
      "there is an intersection joint ahead",
      "the road will get narrower",
      "you are approaching a construction area"
    ],
    1
  ],
  [
    "You are in a No-Passing zone when the center of the road is marked by",
    [
      "a broken yellow line",
      "a broken white line",
      "two solid yellow lines"
    ],
    2
  ],
  [
    "When arrows are painted on the pavement, drivers must:",
    [
      "must go in the direction of the arrows",
      "slow down and prepare to yield right of way",
      "are not allowed to change lanes"
    ],
    0
  ],
  [
    "You may not drive across solid yellow lines except to",
    [
      "change lanes",
      "turn left",
      "turn right"
    ],
    1
  ],
  [
    "Double solid yellow lane lines",
    [
      "should not be crossed except with due care",
      "should not be crossed anytime",
      "does not allow lane changing"
    ],
    1
  ],
  [
    "You may not cross a single broken white of yellow line",
    [
      "when turning left into a driveway",
      "when passing to the right on a one-way street",
      "when to do so would interfere with traffic"
    ],
    2
  ],
  [
    "You may cross over a double line on the road to overtake another car if the line on your side is",
    [
      "solid white",
      "broken",
      "solid yellow"
    ],
    1
  ],
  [
    "When you approach a flashing red signal light, you should",
    [
      "wait for the green light before proceeding",
      "slow down and proceed with caution",
      "come to a full stop and proceed when it is safe to do so"
    ],
    2
  ],
  [
    "Which of the following hand signals must a driver give when he wants to slow down and stop?",
    [
      "left is bent at elbow, hand pointing up",
      "left arm held straight in horizontal position",
      "left arm held down and hand pointing at ground"
    ],
    2
  ],
  [
    "The proper hand signal for right turn is",
    [
      "left arm bent at elbow, hand pointing up",
      "left arm held straight in horizontal position",
      "left arm held down and hand pointing at ground"
    ],
    0
  ],
  [
    "If the driver ahead of your extends his left arm straight out, you are fairly sure that he is going to",
    [
      "turn left at the next intersection",
      "pull off to the side of the road to stop",
      "turn right at the next intersection"
    ],
    0
  ],
  [
    "When approaching a railway crossing with a signal device warning the approach of a train, you must",
    [
      "stop not less than 1.5 meters from the nearest rail",
      "slow down and proceed with caution",
      "pull off to the side of the road to stop"
    ],
    0
  ],
  [
    "Under what circumstances should you sound your \"horn\"?",
    [
      "as a safety warning",
      "at school zones",
      "at hospital zones"
    ],
    0
  ],
  [
    "What does the lane require you to do upon approaching an intersection with a stop sign?",
    [
      "slow down and proceed when it is safe to do so",
      "stop and proceed when it is safe to do so",
      "yield the right-of-way if necessary to vehicles approaching from left or right"
    ],
    1
  ],
  [
    "Upon approaching an intersection marked with a YIELD SIGN, you are required to",
    [
      "stop before entering the intersection",
      "enter the intersection immediately",
      "slow down then enter the intersection when the way is clear"
    ],
    2
  ],
  [
    "The road sign \"Do Not Enter\" is a",
    [
      "Regulatory sign",
      "Guide sign",
      "Warning sign"
    ],
    0
  ],
  [
    "The Right-of-Way law provides us with",
    [
      "basic rights as drivers",
      "rules for when to yield to others",
      "rules for turning right"
    ],
    1
  ],
  [
    "A good safety rule when you are sure you have the legal right-of-way is",
    [
      "never believe on it",
      "sound your horn to alert others",
      "always demand"
    ],
    0
  ],
  [
    "At rotundas, which of the following vehicles have the right-of-way?",
    [
      "vehicles which are just about to enter",
      "vehicles within the rotunda",
      "vehicles facing the green light"
    ],
    1
  ],
  [
    "The driver of a car traveling on a highway is required to yield to",
    [
      "any car coming out of a driveway",
      "pedestrian",
      "cars approaching an intersection from the left"
    ],
    1
  ],
  [
    "If there are pedestrians on a school crossing, you are required to",
    [
      "stop and give way only to persons crossing from your right",
      "stop only for children and give way to them from either direction",
      "stop and do not proceed until all persons are completely clear off the crossing"
    ],
    2
  ],
  [
    "Should a driver turning at an intersection give way to pedestrians?",
    [
      "Yes, a driver turning right or left must give way to pedestrians",
      "No pedestrians must give way to all vehicles",
      "Yes, but only if the driver is turning left"
    ],
    0
  ],
  [
    "When two vehicles meet on an upgrade road where neither cars pass, which of the two must yield?",
    [
      "the vehicle facing downhill",
      "the vehicle facing uphills",
      "the vehicle that blow its horn first"
    ],
    0
  ],
  [
    "Before changing lanes in traffic, you should always give a signal, check your rear-view mirror and",
    [
      "turn your head to check other vehicles beside your car",
      "sound your horn",
      "blink your headlight"
    ],
    0
  ],
  [
    "You should change lanes only after you have",
    [
      "signaled your intention and checked traffic",
      "signaled your intention",
      "checked traffic"
    ],
    0
  ],
  [
    "After passing or overtaking a car, you can safely move back into the lane you left if:",
    [
      "the driver you have passed honks his horn",
      "you can see in your rear-view mirror the car you have passed",
      "you can see in your side-view mirror the car you have passed"
    ],
    1
  ],
  [
    "You may pass to the right of a car traveling in your direction",
    [
      "if the highway is clearly marked for two or more lanes moving towards the same direction",
      "on a road having one lane in opposite direction",
      "by driving off the paved roadway"
    ],
    0
  ],
  [
    "If you are traveling in the wrong lane, what must you do to make a turn as you enter an intersection?",
    [
      "make the turn as quickly as possible",
      "brake or clutch while actually turning",
      "look behind on both sides and see if it is safe before you change lane"
    ],
    2
  ],
  [
    "You should begin signaling for a right or left turn before reaching the turning point by at least",
    [
      "30 meters",
      "60 meters",
      "15 meters"
    ],
    0
  ],
  [
    "You should normally begin a right turn on",
    [
      "the lane nearest to the road center",
      "the lane nearest the right curb",
      "the same lane as for a left turn"
    ],
    1
  ],
  [
    "The car behind you wants to pass. You should",
    [
      "blow you horn to allow him to pass",
      "slow down slightly and pull to the right",
      "pull to the right and stop as he can pass"
    ],
    1
  ],
  [
    "When driving on the highway at night, you should use low beam headlights (dim lights) when",
    [
      "another driver dims his lights",
      "blinded by the headlights of an approaching vehicle",
      "all of the above"
    ],
    2
  ],
  [
    "If the brake lights of several cars ahead of you flash on, you should",
    [
      "release accelerator and prepare to brake",
      "apply your brakes as soon as possible",
      "increase your speed"
    ],
    0
  ],
  [
    "Which of these steps is not correct when making a right turn?",
    [
      "stop in the crosswalk",
      "signal at least 30 meters ahead of your turn",
      "watch for pedestrians on the street you are about to enter"
    ],
    0
  ],
  [
    "The driver must not overtake at the foot or approach of a bridge because",
    [
      "he cannot see oncoming vehicles form the other side of the bridge",
      "there are pedestrians crossing",
      "he might obstruct the flow of traffic"
    ],
    0
  ],
  [
    "The best practice when turning left or right while traveling on a highway is",
    [
      "to signal your intention as you make the turn",
      "to give the electrical and/or hand signal at least 30 meters before you make the turn",
      "to disregard signaling if there is no traffic ahead or behind you."
    ],
    1
  ],
  [
    "Using the shoulder of the road pass to the right of a car ahead of you is",
    [
      "allowed if you are turning right",
      "allowed if the car ahead is turning left",
      "against the law"
    ],
    2
  ],
  [
    "Which of the following is not a safe place to overtake?",
    [
      "when approaching a bridge or upon a curve",
      "at an intersection",
      "both of the above"
    ],
    2
  ],
  [
    "A left turn is more dangerous than a right turn because",
    [
      "cars from the right are moving faster",
      "you have to be alert for vehicles coming from both left and right",
      "four-lane streets are wider than two-lane streets"
    ],
    1
  ],
  [
    "What light shall be used when vehicles are parked on the highway at night?",
    [
      "headlight",
      "parking lights or lower-beam headlights",
      "signal lights"
    ],
    1
  ],
  [
    "Parking lights may used",
    [
      "at anytime",
      "for parking and when visibility is poor",
      "when driving on a well-lighted streets"
    ],
    1
  ],
  [
    "We consider a vehicle parked when",
    [
      "it has brought to stop on the shoulder of a highway and remains inactive in a place for an",
      "it stops to discharge/take in waiting passengers",
      "it loads/unloads small quantity or freight with reasonable dispatch and moves away without delay"
    ],
    0
  ],
  [
    "When parking downhill, you should turn from from wheel",
    [
      "into the curb or toward the side of the road",
      "away from the curb",
      "any direction will do"
    ],
    0
  ],
  [
    "When parking a card on an upgrade without a curb, the best practice is to",
    [
      "get close to the curb and turn the front wheels away from curb",
      "turn wheels sharply to the left",
      "turn wheels sharply to the right"
    ],
    0
  ],
  [
    "What should you do when parking uphill and there is a curb?",
    [
      "turn wheels to curb",
      "turn back of wheels to curb",
      "turn your front wheels sharply to the left away from curb"
    ],
    1
  ],
  [
    "Before moving your car from a parked position, you should",
    [
      "check other traffic, signal and pull from curb when it is safe to do so",
      "signal and pull from curb",
      "sound your horn and pull from curb slowly"
    ],
    0
  ],
  [
    "You may never park",
    [
      "on a crosswalk",
      "on a one-way street",
      "within 5-meters of a fire-hydrant"
    ],
    0
  ],
  [
    "When loading or unloading passengers, we usually stop at the",
    [
      "right side of the road nearest the sidewalk",
      "middle side of the road",
      "intersection"
    ],
    0
  ],
  [
    "A driver may load and unload passengers",
    [
      "only at designated stops",
      "whenever a passenger signals for a stop",
      "before an intersection"
    ],
    0
  ],
  [
    "Whenever you leave the car unattended, the law says that you stop the engine and",
    [
      "notch effectively the hand brake",
      "shift the gear to neutral",
      "close the windows"
    ],
    0
  ],
  [
    "When you intend to drive slower than the other vehicles, you should use the",
    [
      "outermost (right) lane",
      "center lane",
      "innermost (left) lane"
    ],
    0
  ],
  [
    "When you intend to drive faster than the other vehicles, you should use the",
    [
      "outermost (right) lane",
      "center lane",
      "innermost (left) lane"
    ],
    2
  ],
  [
    "Which of the following is the maximum speed limit on the expressway?",
    [
      "60 kph",
      "80 kph",
      "100 kph"
    ],
    2
  ],
  [
    "The speed limit within a school zone during school days is",
    [
      "20 kph",
      "25 kph",
      "30 kph"
    ],
    0
  ],
  [
    "When using the basic speed law as a guide, the choice of speed will be based",
    [
      "speed of the driver",
      "fuel of car being driven",
      "traffic and road condition"
    ],
    2
  ],
  [
    "Under the basic speed law, you may never drive faster than",
    [
      "that which is safe",
      "the posted limit",
      "the flow of traffic"
    ],
    0
  ],
  [
    "A safe speed to drive your car under adverse condition",
    [
      "depends on the road and weather condition",
      "is the posted speed limit",
      "depends on the mechanical skill of the driver"
    ],
    0
  ],
  [
    "At night, you should never drive at a speed which would prevent you from stopping within the distance",
    [
      "you can't see in your headlights",
      "of a 4 car-lengths",
      "of 170 feet"
    ],
    0
  ],
  [
    "The speed limit signs along the roadways should be thought of as",
    [
      "the recommended speed under the best condition",
      "the recommended speed under the worst condition",
      "the recommended speed under any condition"
    ],
    0
  ],
  [
    "It is more dangerous to drive at the maximum speed limit at night than during daytime because",
    [
      "your reaction time is slower at night",
      "the roadways are more apt to be slippery at night",
      "you cannot see too far ahead at night"
    ],
    2
  ],
  [
    "Night driving is dangerous because",
    [
      "street lights tend to blur your vision",
      "more vehicles are on the road at night",
      "the distance we can see ahead is reduced"
    ],
    2
  ],
  [
    "When following behind another car, it is considered a safe rule to allow at least",
    [
      "space for one car",
      "15 feet of stopping distance",
      "one-car length per 10 miles of speed"
    ],
    2
  ],
  [
    "Which of the following should you do if you feel drowsy while driving?",
    [
      "pull off the road and rest",
      "move over to the right lane and continue driving",
      "increase your speed to get away from other vehicles"
    ],
    0
  ],
  [
    "When approaching sharp curve on the highway, you should",
    [
      "decrease speed before entering the curve",
      "increase speed while negotiating the curve",
      "apply your brake lightly while taking the curve"
    ],
    0
  ],
  [
    "Ignoring traffic lights during late hours of the night could",
    [
      "make you a good driver",
      "involve you in fatal accident",
      "decrease your fuel consumption"
    ],
    1
  ],
  [
    "A good driving attitude of a driver is",
    [
      "drive slowly",
      "drive defensively",
      "take chances if possible"
    ],
    1
  ],
  [
    "Drivers gather most information with their",
    [
      "cars",
      "eyes",
      "hands"
    ],
    1
  ],
  [
    "Which of the following is most recommended in a way of dealing with fatigue on a long trip?",
    [
      "stop periodically for rest and exercise",
      "eat much and drink a little alcoholic beverages",
      "take an over-the-counter \"keep awake\" pill"
    ],
    0
  ],
  [
    "What habit will help you prevent a fixed stare and resist distraction?",
    [
      "ground viewing",
      "moving your eyes regularly by looking near and far",
      "another car's speed"
    ],
    1
  ],
  [
    "Which of the following can you adjust in order to reduce the chance of collision?",
    [
      "your speed and lane position",
      "the sharpness of a curve",
      "another car's speed"
    ],
    0
  ],
  [
    "Drivers have to make decisions",
    [
      "only in heavy traffic",
      "only until they become experienced",
      "continuously as they drive"
    ],
    2
  ],
  [
    "When interacting with bicyclists, you must",
    [
      "be more aware of the road condition",
      "adjust speed and increase your space margin",
      "use different visual-search"
    ],
    1
  ],
  [
    "As you drive, your glances to the side and rear view mirrors should be",
    [
      "as brief as possible",
      "as long as you like",
      "at least one second each"
    ],
    0
  ],
  [
    "At night when you meet another vehicle with blinding bright lights, the safest thing to do is",
    [
      "turn your lights on high beam",
      "look slightly to the right side of the roadway",
      "look at the headlight of the approaching vehicle"
    ],
    1
  ],
  [
    "When approaching an intersection and the roadway beyond is blocked with traffic, you should",
    [
      "keep as close as possible to the car ahead",
      "proceed slowly into the intersection until the traffic ahead moves on",
      "stop before the intersection and wait until traffic ahead moves on"
    ],
    1
  ],
  [
    "Throwing bottles, cans or anything from your vehicle windows is",
    [
      "forbidden at all times",
      "forbidden only in the province",
      "forbidden only is the cities"
    ],
    0
  ],
  [
    "The most effective way to deal with a \"tailgater\" is to",
    [
      "ignore him but don't allow him to get very close to you",
      "slow down and let him pass",
      "increase your speed and slam on your brakes"
    ],
    1
  ],
  [
    "When walking on a roadway where there is no sidewalk, the pedestrians must always stay",
    [
      "on the left side of the road facing traffic",
      "on the right side",
      "either way will do"
    ],
    0
  ],
  [
    "In case of an accident, the first duty of the driver involved is to",
    [
      "pick-up the injured person and take him to the nearest hospital",
      "report the accident to the hospital",
      "report the accident to the nearest police station"
    ],
    0
  ],
  [
    "In case of injuries involved in an accident, the duty of the uninjured driver is to",
    [
      "call a physician",
      "keep the victim lying down",
      "try to determine who is at fault"
    ],
    0
  ],
  [
    "To have one's driver's license suspended means to",
    [
      "have it revalidated by the LTO",
      "have it taken away permanently by the LTO",
      "have it taken temporarily by the LTO"
    ],
    2
  ],
  [
    "The main reasons for requiring motor vehicle inspection is to",
    [
      "earn revenue for the government",
      "give the inspector a chance to look at your car",
      "try and make sure that cars meet the safety standards"
    ],
    2
  ],
  [
    "A public utility vehicle can only be driven by holder of a",
    [
      "student permit",
      "non-professional license",
      "professional license"
    ],
    2
  ],
  [
    "To own a driver's license is",
    [
      "an honor",
      "a right",
      "a privilege"
    ],
    2
  ],
  [
    "When may you lend your driver's license?",
    [
      "under no circumstance",
      "to another person who is learning to drive",
      "in Emergencies"
    ],
    0
  ]
];