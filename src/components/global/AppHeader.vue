<template>
    <div class="header">
        <div class="logo">Alaref Vue</div>
        <div id="nav">
            <router-link to="/" tag="li" >
                <a>Home</a>
            </router-link> |
            <router-link to="/about" tag="li"  >
                <a>About</a>            
            </router-link> | 
            <router-link to="/help" tag="li" replace >
                <a>Help</a>            
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>