<script>
import Home from './lib/home.svelte';
import About from './lib/about.svelte';
import Services from './lib/services.svelte';
import Ministries from './lib/ministries.svelte';
import Events from './lib/events.svelte';
import Contacts_and_Directions from './lib/contacts_and_directions.svelte';
</script>


<Home />
<About />
<Services />
<Ministries />
<Events />
<Contacts_and_Directions />


<style>
    :global(*, *::before, *::after) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
</style>
