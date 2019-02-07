# Warnings

##First:
npm WARN lifecycle The node binary used for scripts is /var/folders/fn/l9lr2q4907502kknwys8nkm00000gq/T/yarn--1549559002923-0.07076775927542056/node but npm is using /usr/local/bin/node itself. Use the `--scripts-prepend-node-path` option to include the path for the node binary npm was executed with.
### Fix
tried to run a script in 'package.json', but ended up

ran this from CLI 'npm config set scripts-prepend-node-path true'

*how do I run this as a script?*
`--scripts-prepend-node-path`

##Second
./src/pages/Campaign/index.js
[1]   Line 2:   'Router' is defined but never used         no-unused-vars
[1]   Line 2:   'Route' is defined but never used          no-unused-vars
[1]   Line 2:   'Link' is defined but never used           no-unused-vars
[1]   Line 4:   'MonsterList' is defined but never used    no-unused-vars
[1]   Line 5:   'EncounterList' is defined but never used  no-unused-vars
[1]   Line 6:   'CharacterList' is defined but never used  no-unused-vars
[1]   Line 12:  'API' is defined but never used            no-unused-vars

### Fix
commented those lines out


##Third
[1] ./src/pages/Encyclopedia/Monsters/MonsterList.js
[1]   Line 30:  Expected to return a value at the end of arrow function  array-callback-return

### Fix
???????????????

## Fourth
./src/pages/Encyclopedia/Monsters/MonsterDisplay.js
[1]   Line 294:  'challenge' is defined but never used  no-unused-vars

### Fix
commented that line out

## Fifth


### Fix


## num


### Fix


## num


### Fix


