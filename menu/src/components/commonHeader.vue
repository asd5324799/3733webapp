<template lang="html">
    <nav>
        <div class="left">
            <img src="../../static/images/logo.png" alt="">
        </div>
        <div class="right">
            <form>
                <div>
                    <input type="" name="" placeholder="请输入游戏名称">
                    <span></span>
                </div>
            </form>
        </div>
    </nav>
</template>
<style scoped="" lang="scss">
    $ten: .266667rem;
    nav { 
        height: .8rem;
        padding: $ten;
        background-color: rgb(0,196,196);
            .right{
                width: 4rem;
                height: .8rem;
                border-radius: 5px;
                background:#fff;
                padding: 0 $ten;
                input {
                    height: .8rem;
                    line-height: .8rem;
                    width: 3rem;
                }
                span { 
                    display:inline-block;
                    width: .533333rem;
                    height: .533333rem;
                    background-image: url('../../static/images/icon/search.png');
                    background-size: contain;
                    float:right;
                    margin-top: .106667rem;
                }
            }
        }
</style>