<script>
    import Img from '../assets/svelte.svg';
</script>

<section>
    <nav>
        <img src={Img} alt="">
        <a href="">home</a>
        <a href="">about</a>
    </nav>
</section>

<style>
    nav{
        background-color: white;
        width: 100vw;
        height: 10vh;
        position:relative;
    }
    a{
        margin-left: 2vw;
    }
</style>
