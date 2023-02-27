<template>
    <div class="content">
        <h4 class="text_shadows">ZorbSMP Phase 6 is live now!!!</h4>
        
        <h4 class="text_shadows">Live for {{ days }} days {{ hours }} hours and {{ minutes }} minutes!</h4>

        <h4>About</h4>
        <p>
            ZorbSMP is a minecraft experience centered around blood, sweat, and piss.
        </p>
        <h4>When</h4>
        <p>
            Every time Mojang releases a major update to Minecraft, a new Phase of ZorbSMP begins with a fresh slate. <br/>
            New factions are forming, players decide to group up or go solo to achieve their phase goals. <br/>
            After about a month or two, the server shuts down. <br/>
            Everything other than your memories of this is bound to be temporary! <br/>
        </p>
        <h4>What</h4>
        <p>
            ZorbSMP runs survival, as the name states. Shit is built through effort, fun is had, little limits on what goes. Just have fun and don't be a dick!
        </p>
        <h4>How</h4>
        <p>
            To join the fun all you need to do is join the discord (link is below), and add your name to the whitelist channel. An admin will hopefully approve your request at their earliest convenience. After that you can join the minecraft server at the address mc.zorb.gay.
        </p>
    </div>
</template>

<script>
    export default {
        name: "HomeComponent",
        data() {
          return {
            timerDate: Date.now(),
            targetDate: 1677434400000,
            days: 0,
            hours: 0,
            minutes: 0,
          }
        },

        watch: {
            timerDate: {
                handler(value) {

                    if (value != 0) {
                        setTimeout(() => {
                            this.timerDate = Date.now() - this.targetDate;
                            this.days = Math.floor(this.timerDate / 1000 / 60 / 60 / 24);
                            this.hours = Math.floor((this.timerDate / 1000 / 60 / 60) - (this.days * 24));
                            this.minutes = Math.floor((this.timerDate / 1000 / 60) - (this.hours * 60) - (this.days * 24 * 60));
                        }, 1000);
                    }

                },
                immediate: true // This ensures the watcher is triggered upon creation
            }

        }
    }
</script>

<style scoped>

p {
  font-size: 1.5em;
  margin: 1em 0 0 0;
}
h4 {
  margin-top: 1.5em;
  font-size: 3em;
  background: -webkit-linear-gradient(109.6deg, rgb(255, 207, 84) 11.2%, rgb(255, 158, 27) 91.1%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --color-primary: #111111;
  --color-secondary: #333333;
  --color-tertiary: #555555;
  --color-quaternary: #777777;
  --color-quinary: #999999;
}

.content {
  margin: 0 20% 0 20%;
  padding: 5% 7%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}

.text_shadows {
  text-shadow: 3px 3px 0 #333333, 6px 6px 0 #555555,
    9px 9px #777777, 12px 12px 0 #999999;
  font-family: bungee, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
  margin: 0 0 2em 0;
  color: #111111;
  animation: shadows 1.2s ease-in infinite, move 1.2s ease-in infinite;
  letter-spacing: 0.4rem;
}

@keyframes shadows {
  0% {
    text-shadow: none;
  }
  10% {
    text-shadow: 3px 3px 0 #333333;
  }
  20% {
    text-shadow: 3px 3px 0 #333333,
      6px 6px 0 #555555;
  }
  30% {
    text-shadow: 3px 3px 0 #333333,
      6px 6px 0 #555555, 9px 9px #777777;
  }
  40% {
    text-shadow: 3px 3px 0 #333333,
      6px 6px 0 #555555, 9px 9px #777777,
      12px 12px 0 #999999;
  }
  50% {
    text-shadow: 3px 3px 0 #333333,
      6px 6px 0 #555555, 9px 9px #777777,
      12px 12px 0 #999999;
  }
  60% {
    text-shadow: 3px 3px 0 #333333,
      6px 6px 0 #555555, 9px 9px #777777,
      12px 12px 0 #999999;
  }
  70% {
    text-shadow: 3px 3px 0 #333333,
      6px 6px 0 #555555, 9px 9px #777777;
  }
  80% {
    text-shadow: 3px 3px 0 #333333,
      6px 6px 0 #555555;
  }
  90% {
    text-shadow: 3px 3px 0 #333333;
  }
  100% {
    text-shadow: none;
  }
}

@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  40% {
    transform: translate(-12px, -12px);
  }
  50% {
    transform: translate(-12px, -12px);
  }
  60% {
    transform: translate(-12px, -12px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

@media screen and (max-width: 1080px) {
    .content {
      margin: 5% 5% 10% 5%;
    }
}

</style>