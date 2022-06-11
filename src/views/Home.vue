<template>
    <div class="content">
        <h4 class="text_shadows">Launching Sunday, 12.06.2022, at 6 PM GMT</h4>
        <p>
            ZorbSMP is a minecraft experience centered around blood, sweat, and piss. Shit is built through effort, fun is had, little limits on what goes. Just have fun and don't be a dick!
        </p>
        <p>
            With every new major minecraft update ZorbSMP starts a new phase. A fresh slate for new factions to form. Be passive, be hostile, it's up to you as long as it's not griefing.
        </p>
        <p>
            And ffs, listen to the admins. They're just trying to make it fun for everyone.
        </p>
    </div>
</template>

<script>
    export default {
        name: "HomeComponent",
    }
</script>

<style scoped>

p {
    margin: 1em 0 0 0;
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
  margin: 0;
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

</style>