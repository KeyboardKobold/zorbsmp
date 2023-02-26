<template>
    <div class="content">
        <h4>ZorbSMP Phase 6</h4>
        <p>
            All new experience! ZorbSMP Phase 6 will take us into the realms of modded content for the first time in ZorbSMP history! <br/>
            As per usual, it'll run for as long as there is enough players to justify it.
        </p>
        <h4>Modpack</h4>
        <a id="modlink" href="https://beta.curseforge.com/minecraft/modpacks/worlds-edge-zorbsmp-phase-6">Click here to view the mods in use!</a>
        <h4>How to play</h4>
        <p>
            <ul>
                <li>Join the discord server! Link at the bottom of this page.</li>
                <li>Feast your eyes on our wonderful rules.</li>
                <li>Pop your minecraft username into the #whitelist-nametags channel.</li>
                <li>Install the modpack referenced above.</li>
                <li>Join the server via the address mc.zorb.gay!</li>
            </ul>
            Watch the video below for a step by step guide!
        </p>
        <div>
                <b-embed
                    type="iframe"
                    aspect="16by9"
                    src="https://www.youtube.com/embed/Dhh06d5b3Fw"
                    allowfullscreen
                ></b-embed>
            </div>
        <h4>ZorbSMP Java Server Rules</h4>
        <p>
            <ul>
                <li>Don't be an ass wipe. There is a difference between rivalry and being a dick, if someone is getting upset by your actions and you continue, I'll wack you with the ban hammer. This includes things like:</li>
                <ul>
                    <li>Excessive and unprovoked griefing on bases.</li>
                    <li>Unnecessary amounts of damage on peoples bases.</li>
                    <li>Not filling in creeper holes you made on someone else's base (you monster).</li>
                    <li>Spawn camping/Combat logging.</li>
                    <li>Stealing excessively and/or valuable things.</li>
                    <li>Portal trapping.</li>
                    <li>Nothing discriminatory.</li>
                </ul>
                <li>Please don't hack, there is no way me or the admins can prevent it unless your caught, so we trust that you wont.</li>
                <li>Bosses are not a server event anymore, just be nice and tell others you are doing it so people who want the first kill can come along and join in.</li>
                <li>Raids mostly occur on accident however, if someone has claimed/owns that village it is up to them whether or not you may participate and get loot from the raid. Triggering raids offensively/Intentionally is allowed.</li>
                <li>Try not to rush to full netherite in the first day, there is no punishment however I don't want the server exhausted again in the first week, chill and build some huge cocks or something idk.</li>
                <li>Exploring is fine ofc but don't travel ridiculously far so that you are never seen again by another player. I can't stress this enough, I want to see your builds! If its has a coord of more than 750 in the nether I'll fuckin clone your base into spawn.</li>
                <li>Try not to make huge teams like Birmingham or hurghada which dominated the world lmao.</li>
                <li>Raids mostly occur on accident however, if someone has claimed/owns that village it is up to them whether or not you may participate and get loot from the raid. Triggering raids offensively/Intentionally is allowed.</li>
            </ul>
        </p>
        <!--h4>Plugins</h4>
        <p>
            <ul>
                <li>Images. Use by typing /images create -url- -percentage- <br/> Percentages are optional.</li>
                <li>DynMap</li>
                <li>Givepet</li>
                <li>Custom banner layer extension. There's a announcement in discord explaining how to use it. Unlimited banner layers!</li>
                <li>Sit</li>
                <li>Crawl</li>
                <li>Factions through LuckyPerms</li>
            </ul>
        </p!-->
    </div>
</template>

<script>
    export default {
        name: "Phase6Component"
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

.content {
  margin: 0 20% 0 20%;
  padding: 5% 7%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}

@media screen and (max-width: 1080px) {
    .content {
      margin: 5% 5% 10% 5%;
    }
}

</style>