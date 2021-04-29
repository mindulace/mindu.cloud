<template>
    <div class="hello">
        <h1></h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
        <div class="dropdown-toggle">
            <button class="btn color-light p-0 position-relative" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <font-awesome-icon icon="bell" class="bell-icon turned" v-bind:class="{ ring: ring}"/>
                <transition v-if="msgs.filter((obj) => obj.read === false).length > 0" name="slide-fade" mode="out-in">
                    <span class="badge badge-danger rounded-circle position-absolute" :key="msgs.filter((obj) => obj.read === false).length">
                    {{ msgs.filter((obj) => obj.read === false).length }}
                    </span>
                </transition>
            </button>
            <div class="dropdown-menu p-0 overflow-hidden">
                <div v-for="(msg, index) in msgs" :key="index">
                    <transition v-if="!msg.read" name="shrink-fade" mode="out-in">
                        <div class="dropdown-item message" v-bind:class="{ unread: !msg.read }" v-on:click="msg.read = true">
                            <div class="">{{ msg.title }}</div>
                            <div class="text-muted">{{ msg.content }}</div>
                        </div>
                        <div v-if="index != msgs.length - 1" class="dropdown-divider m-0 border-dark"></div>
                    </transition>
                </div>
            </div>
        </div>
        <button class="btn btn-primary" v-on:click="addMessage()">new msg</button>
        <h3>Ecosystem</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data: function() {
        return {
            msgs: [{
                    id: 0,
                    title: "Titel",
                    content: "Neue Message bro",
                    read: false
                }, {
                    id: 1,
                    title: "Titel",
                    content: "Neue Message bro",
                    read: false
                }, {
                    id: 2,
                    title: "Titel",
                    content: "Neue Message bro",
                    read: false
                }, {
                    id: 3,
                    title: "Titel",
                    content: "Neue Message bro",
                    read: false
                }
            ],
            ring: false
        }
    },
    methods: {
        say: function (messageId) {
            this.msgs[messageId].read = true;
        },
        addMessage: function() {
            this.msgs.push({
                id: 4,
                title: "Titel",
                content: "Neue Message bro",
                read: false
            });

            window.console.log(this.msgs);
        }
    },
    watch: {
        clonedItems: function(newVal, oldVal) {
            if (oldVal.length < newVal.length) {
                this.ring = true;

                setTimeout(() => this.ring = !this.ring, 1000);
            }
        }
    },
    computed:{
        clonedItems: function(){
            return JSON.parse(JSON.stringify(this.msgs))
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.message {
    cursor: pointer;
}
.unread {
    background: #e6e6e6;
}
.bell-icon {
    color: #ffffff;
    font-size: 41px;
}
.turned {
    transform: rotate(42deg);
}
.badge {
    font-size: 19px;
    top: 10px !important;
    right: -14px;
}
.dropdown-toggle::after {
    content: unset !important;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.shrink-fade-enter-active {
  transition: all .3s ease;
}
.shrink-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.shrink-fade-enter, .shrink-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  height: 0px;
  opacity: 0;
}

.ring {
    animation: ring 1s infinite ease-in-out;;
}
@keyframes ring {
    0% {
        transform: rotate(42deg) scale(1) skew(1deg)
    }
    10% {
        transform: rotate(15deg) scale(1) skew(1deg)
    }
    20% {
        transform: rotate(35deg) scale(1) skew(1deg)
    }
    30% {
        transform: rotate(15deg) scale(1) skew(1deg)
    }
    40% {
        transform: rotate(35deg) scale(1) skew(1deg)
    }
    50% {
        transform: rotate(42deg) scale(1) skew(1deg)
    }
    100% {
        transform: rotate(42deg) scale(1) skew(1deg)
    }
}
</style>
