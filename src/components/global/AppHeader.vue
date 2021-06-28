<template>
    <div class="header">
        <div class="logo">Alaref Vue</div>
            <ul>
                <router-link to="/" tag="li" exact >
                    <a>Home</a>
                </router-link> |
                <router-link to="/blog" tag="li" >
                    <a>Blog</a>
                </router-link> |
                <router-link to="/about" tag="li"  >
                    <a>About</a>            
                </router-link> | 
                <router-link to="/help" tag="li"  >
                    <a>Help</a>            
                </router-link>
            </ul>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>

<style scoped>

    * {
        padding: 0px;
        margin:0px;
        box-sizing: border-box;
    }
    .header {
        padding: 0px;
        margin:0px;
        background-color: #333;
        color: white;
        overflow: hidden;
    }
    .logo {
        float: left;
        color: white;
        padding: 20px;
        width: 200px;
    }

    ul {
        list-style: none;
        float: right;
        width: calc(100% - 200px)
    }
    li{
        display: inline-block;
    }
    a {
        color: white;
        text-decoration: none;
    }
</style>