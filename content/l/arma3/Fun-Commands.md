---
title: Fun Commands
date: 2018-11-10T09:01:44+01:00
description: ""
categories:
  - ArmA 3
author: "sbondo1234"
authorspaceless: "sbondo1234"
---

{{< link-heading "How To Use" >}}

First, you will need to be the Admin/Host of the mission you are playing. To execute the commands you will need to click ESC and then type the commands into the Debug Console. You can click Local to execute the code locally (Just For You), Server will execute the code to the server and Global will execute the code globally (to everyone).

{{< link-heading "Command List" >}}

#### Open Arsenal
<pre><code class="c">["Open",true] spawn BIS_fnc_arsenal;</code></pre>

#### Kill Player
<pre><code class="c">player setDamage 1;</code></pre>

#### Turn off Weapon Sway
<pre><code class="c">player setCustomAimCoef 0;</code></pre>

#### RPG Bullets to come out of normal gun
<pre><code class="c">player removeeventhandler["fired", FEH_missile];
FEH_missile = player addeventhandler ["fired", { _bullet = nearestObject [_this select 0,_this select 4];
_bulletpos = getPosASL _bullet; _o = "R_PG7_F" createVehicle _bulletpos;
_weapdir = player weaponDirection currentWeapon player; _dist = 11;
_o setPosASL [ (_bulletpos select 0) + (_weapdir select 0)*_dist, (_bulletpos select 1) + (_weapdir select 1)*_dist, (_bulletpos select 2) + (_weapdir select 2)*_dist ]; _up = vectorUp _bullet; _o setVectorDirAndUp[_weapdir,_up]; _o setVelocity velocity _bullet; }];
</code></pre>

#### Different RPG Ammo Types ( use with code above )
<pre><code class="c">"R_PG7_F",
"M_NLAW_AT_F",
"R_PG32V_F",
"R_TBG32V_F",
"M_TITAN_AT",
"M_TITAN_AP",
"Bo_GBU12_LGB",
"BombCluster_01_Ammo_F"</code></pre>

#### ESP (Wallhacks)
<pre><code class="c">if (isnil ("WookieESP")) then {WookieESP = 0;}; if (WookieESP==0) then
{WookieESP=1;cutText [format["Esp On"], "PLAIN DOWN"];hint "Esp
On";}else{WookieESP=0;cutText [format["Esp Off"], "PLAIN DOWN"];hint "Esp Off";};
if (WookieESP==1) then { oneachframe { _nigs = nearestobjects
[player,["CAManBase"],1400]; { if((side _x != side player) && (getPlayerUID _x
!= "") && ((player distance _x) < 1400)) then { drawIcon3D ["", [1,0,0,0.7],
GetPosATL _x, 0.1, 0.1, 45, (format ["%2 : %1m",round(player distance _x), name
_x]), 1, 0.03, "default"] } else { if((getPlayerUID _x != "") && ((player distance _x) < 1000)) then { drawIcon3D ["", [0,1,0.5,0.4], GetPosATL _x, 0.1, 0.1, 45,
(format ["%2 : %1m",round(player distance _x), name _x]), 1, 0.03, "default"] }; }; } foreach playableUnits; _noobs = nearestobjects [player,["CAManBase"],100]; {
if(((alive _x)) && ((player distance _x) < 100)) then { if((side _x != side player)
& ((player distance _x) < 100)) then { if(player distance _x < 10 && _x iskindof "CAManBase" && side _x != civilian) then { drawLine3D [[getposatl player select 0, getposatl player select 1, getposatl player select 2], _x, [1,0,0,(abs((((player
distance _x)) - 100)/100))]] }; } else { drawLine3D [[getposatl player select 0, getposatl player select 1, getposatl player select 2], _x, [0,1,0,(abs((((player
distance _x)) - 100)/100))]] }; }; } foreach playableUnits; }; } else { oneachframe {nil}; };
</code></pre>

#### Aimbot (will even kill teammates)
<pre><code class="c">player addEventHandler ["Fired", { _nearPlayers = player nearEntities ["CAManBase", 1000];
_nearestPlayer=objNull; _nearestPlayerDist=1000; { _dist=vehicle _x distance player; if (_x != player and _dist<_nearestPlayerDist and alive _x) then { _nearestPlayer=_x; _nearestPlayerDist=_dist; }; } forEach _nearPlayers;
_bullet = _this select 6; _head = eyePos _nearestPlayer; _bullet setPosASL _head; }];
</code></pre>

#### Disables Fatigue
<pre><code class="c">player enableFatigue false;</code></pre>

#### Skips Time by 5 hours
<pre><code class="c">skipTime 5;</code></pre>

#### Removes all weapons
<pre><code class="c">removeAllWeapons player;</code></pre>

#### destroys whatever you look at
<pre><code class="c">cursortarget setdamage 1;</code></pre>

#### Make a hint
<pre><code class="c">hint "N. F. Mendana is boss";</code></pre>

#### Typing Text
<pre><code class="c">[ [ ["my nam jif", nil, 30] ], 0, safeZoneY + safeZoneH / 2 ] spawn BIS_fnc_typeText;</code></pre>

#### Fancy Typing Text
<pre><code class="c">[ [ ["sbondFinance,", "<t align = 'center' shadow = '1' size = '0.7' font='PuristaBold'>%1</t>"], ["GIVE ME MONEY", "<t align = 'center' shadow = '1' size = '0.7'>%1</t>
"], ["pls im poor", "<t align = 'center' shadow = '1' size = '1.0'>%1</t>", 15] ] ] spawn BIS_fnc_typeText;
</code></pre>

#### Infinite Ammo
<pre><code class="c">player removeeventhandler["fired", FEH_playerAmmo]; FEH_playerAmmo = player
addeventhandler ["fired", {(_this select 0) setvehicleammo 1}];</code></pre>

#### <a class="b bb bw pb1 no-underline black dim" href="https://pastebin.com/98Qf1ng7" target="_blank">Pet which follows you around</a>

#### Start shooting vehicles <a class="b bb bw pb1 no-underline black dim" href="https://community.bistudio.com/wiki/Arma_3_CfgVehicles_WEST" target="_blank">Find Vehicle Classnames Here</a>
<pre><code class="c">player addEventHandler ["Fired", { _bullet = _this select 6;
_unit = _this select 0; _newPos = _unit modelToWorld [0,8,1];
_veh = createVehicle ["I_MRAP_03_F",_newPos,[],0,"CAN_COLLIDE"];
_veh setDir getDir _unit; _veh setVelocity velocity _bullet;
deleteVehicle _bullet; }];</code></pre>

#### Heals Players
<pre><code class="c">player setDamage 0;</code></pre>

#### Text in middle of screen
<pre><code class="c">titleText ["Show this text", "PLAIN"];</code></pre>

#### Deletes any vehicle you look at
<pre><code class="c">deleteVehicle cursorTarget;</code></pre>

#### repairs any vehicle fully
<pre><code class="c">_timeForRepair = 0; _vehicle = vehicle player;
hint format ["Please wait %1 seconds for repair/flip",_timeForRepair];
sleep _timeForRepair; if (_vehicle == player) then {_vehicle = cursorTarget;};
_vehicle setfuel 1; _vehicle setdamage 0;
_vehicle = nil; vehicle = this select 0; _vehicle setvectorup [0,0,1];</code></pre>

#### sets players ammo to 1 ( Can change )
<pre><code class="c">player setAmmo [currentWeapon player, 1];</code></pre>

#### Attaches GBU
<pre><code class="c">_expl1 = "Bo_GBU12_LGB" createVehicle position player; _expl1 attachTo
[player, [-0.1, 0.1, 0.15], "Pelvis"]; _expl1 setVectorDirAndUp [ [0.5, 0.5, 0],
[-0.5, 0.5, 0] ]; _expl2 = "Bo_GBU12_LGB" createVehicle position player; _expl2
attachTo [player, [0, 0.15, 0.15], "Pelvis"]; _expl2 setVectorDirAndUp [ [1, 0, 0],
[0, 1, 0] ]; _expl3 = "Bo_GBU12_LGB" createVehicle position player; _expl3
attachTo [player, [0.1, 0.1, 0.15], "Pelvis"]; _expl3 setVectorDirAndUp
[ [0.5, -0.5, 0], [0.5, 0.5, 0] ];</code></pre>

#### Gives you loads of money ( For altis life )
<pre><code class="c">life_atmcash = life_atmcash + 999999;</code></pre>

#### Attaches colour smoke to player(s)
<pre><code class="c">
_expl1 = "G_40mm_SmokeBlue" createVehicle position player; _expl1 attachTo [player,
[-0.1, 0.1, 0.15], "Pelvis"]; _expl1 setVectorDirAndUp [ [0.5, 0.5, 0], [-0.5, 0.5,
0] ]; _expl2 = "G_40mm_SmokeOrange" createVehicle position player; _expl2 attachTo
[player, [0, 0.15, 0.15], "Pelvis"]; _expl2 setVectorDirAndUp [ [1, 0, 0], [0, 1,
0] ]; _expl3 = "G_40mm_SmokePurple" createVehicle position player; _expl3 attachTo
[player, [0.1, 0.1, 0.15], "Pelvis"]; _expl3 setVectorDirAndUp [ [0.5, -0.5, 0],
[0.5, 0.5, 0] ];
</code></pre>

#### removes fog
<pre><code class="c">0 setFog 0; forceWeatherChange; 999999 setFog 0;</code></pre>

#### Removes fuel from player vehicle
<pre><code class="c">vehicle player setfuel 0;</code></pre>

#### Adds a weapon to player <a class="b bb bw pb1 no-underline black dim" href="https://community.bistudio.com/wiki/Arma_3_CfgWeapons_Weapons" target="_blank">( Find classnames here )</a>
<pre><code class="c">unit addPrimaryWeaponItem "Classname";
unit addSecondaryWeaponItem "Classname";</code></pre>

#### Gives god mode
<pre><code class="c">player allowdamage false;</code></pre>

#### teleports people 700m in air
<pre><code class="c">_pos = getPosATL player; _pos set [2, 700]; player setPosATL _pos; player spawn bis_fnc_halo;</code></pre>

#### Attaches chicken to players head
<pre><code class="c">_expl1 = "C o c k_random_F" createVehicle position player; _expl1 attachTo
[player, [-0.1, 0.1, 0.15], "Head"]; _expl1 setVectorDirAndUp [ [0.5, 0.5, 0], [-0.5, 0.5, 0] ];</code></pre>

#### Airstrike
<pre><code class="c">player addAction["Airstrike", { meins = 1000; mein1 = { openMap[false, false]; [_pos] spawn { for '_l39' from 0 to meins do { _l87 = "M_AT"; _l88 = [_this select 0 select 0, _this select 0 select 1, (_this select 0 select 2) + 200]; _l89 = createVehicle[_l87, _l88, [], 0, "CAN_COLLIDE"]; _l89 setvelocity[random 1000.00 - 500, random 1000.00 - 500, 0]; [_l89, -90, 0] call BIS_fnc_setPitchBank; hint format["Missiles Launched \n by ThirtySix \n %1", _l39]; sleep(random 0.00001); }; }; }; titleText["Click on map to drop Airstrike", "PLAIN"]; titlefadeout 7; onMapSingleClick "_pos call mein1;"; openMap[true, false]; }, "", 50]; player addAction["Vehicle <t color='#0000FF'>EMP</t>", { [cursorTarget, "vehicle player setFuel 0;"] call ThirtySix; hint format["%1 \n Vehicle Stopped \n by ThirtySix", cursorTarget]; }, "", 50];</code></pre>

#### Gives speed upgrade to vehicles
<pre><code class="c">hint "Speed upgrade loaded!"; waituntil {!isnull (finddisplay 46)}; (findDisplay 46) displayAddEventHandler ["KeyDown","_this select 1 call MY_KEYDOWN_FNC;false;"]; MY_KEYDOWN_FNC = { _vcl = vehicle player; if(_vcl == player)exitwith{}; _nos = _vcl getvariable "nitro"; _supgrade = _vcl getvariable "supgrade"; if(isEngineOn _vcl) then { switch (_this) do { case 17: { if(isEngineOn _vcl and !isnil "_supgrade") then { _vcl SetVelocity [(velocity _vcl select 0) * 1.011, (velocity _vcl select 1) *1.011, (velocity _vcl select 2) * 0.99]; } else { _vcl setvariable ["supgrade", 1, true]; }; }; case 42: { if(isEngineOn _vcl and !isnil "_nos") then { _vcl setVelocity [(velocity _vcl select 0) * 1.01, (velocity _vcl select 1) * 1.01, (velocity _vcl select 2) * 0.99]; } else { _vcl setvariable ["nitro", 1, true]; }; }; }; }; };</code></pre>

#### Destroys player vehicle
<pre><code class="c">vehicle player setdamage 1</code></pre>

#### Select where to teleport on map
<pre><code class="c">openMap true; onMapSingleClick { onMapSingleClick {}; {_x setPos _pos;} forEach units group player; hint ; openMap false; };</code></pre>

#### Go Speedy! - You can change the value at the end
<pre><code class="c">player setAnimSpeedCoef 100;</code></pre>
