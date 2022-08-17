$(document).ready(function(){
    var log = 1;
    var diam = 2;
    var esmer = 5;
    var pickaxes = 0;
    var broca = 0;
    var money = 300000;
    var autoLogPlus = 0;
    var autoDiamPlus = 0;
    var autoEsmerPlus = 0;
    var autoChopperPrice = 100;
    var pickaxePrice = 50;
    var brocaPrice = 300;
    var autoMinerPrice = 500;
    var autoBrocaPrice = 5000;
    var melhoriaLog = 0;
    var melhoriaLogPrice = 50000;
    var menu;

    const chopper = document.getElementById('lenhador1');
    const coin = document.getElementById('coin');
    const miner = document.getElementById('minerador1');
    const miner2 = document.getElementById('minerador2');
    const popup = document.getElementById('popup');

    setInterval(function(){
        money += autoLogPlus;
        money += autoDiamPlus;
        money += autoEsmerPlus;
        money += melhoriaLog;
        changeInventory();
        changeMarket();
    }, 1000);

    $("#lenhador1").click(function(){
        money += log;
        changeInventory();
        changeMarket();
        
        if (autoLogPlus>=1){chopper.src='./image/Terraria_Lenhador.gif';}
        else{
        chopper.src='./image/sprite_1.png';
        setTimeout(() => {
            chopper.src='./image/sprite_0.png';
        }, 200);
        }
    });

    $("#minerador1").click(function(){       
        if(pickaxes == 0){
            $(".popup").css("display", "block");
            $("#popText").css("display", "block");
            $("#popText1").css("display", "none");
        }else{
            if(autoDiamPlus>=1){
                miner.src='./image/TerrariaMiner.gif';
                money += diam;
                changeInventory();
            }else{
                money += diam;
                changeInventory();
                miner.src='./image/spritePica_1.png';
                setTimeout(() => {
                    miner.src='./image/spritePica_0.png';
                }, 200);}
            }
        });


    $("#minerador2").click(function(){       
        if(broca == 0){
            $(".popup").css("display", "block");
            $("#popText1").css("display", "block");
            $("#popText").css("display", "none");
        }else{
            if(autoDiamPlus>=1){
            miner2.src='./image/PicaretadorEsmeralda.gif';
            money += esmer;
            changeInventory();
        }else{
            money += esmer;
            changeInventory();
            miner2.src='./image/esmer_pick1.png';
            setTimeout(() => {
                miner2.src='./image/esmer_pick0.png';
            }, 100);}
        }
    });


    $("#sell1").click(function(){
        logs--;
        money += logPrice;
        changeInventory();
        changeMarket();
    });

    $("#autoChopper").click(function(){
        money -= autoChopperPrice;
        autoLogPlus++;
        changeInventory();
        changeMarket();
        chopper.src='./image/Terraria_Lenhador.gif';
    });

    $("#autoMiner").click(function(){
        money -= autoMinerPrice;
        autoDiamPlus+=3;
        changeInventory();
        changeMarket();
        miner.src='./image/TerrariaMiner.gif';
    });

    $("#autoBroca").click(function(){
        money -= autoBrocaPrice;
        autoEsmerPlus+=5;
        changeInventory();
        changeMarket();
        miner2.src='./image/PicaretadorEsmeralda.gif';
    });

    $("#madeirax2").click(function(){
        money -= melhoriaLogPrice;
        melhoriaLog+=log*2;
        changeInventory();
        changeMarket();
    });

    $("#buyPickaxe").click(function(){
            money -= pickaxePrice;
            pickaxes++;
            changeInventory();
            changeMarket();
    });

    $("#buyBroca").click(function(){
        money -= brocaPrice;
        broca++;
        changeInventory();
        changeMarket();
    });
 

    $("#visit").click(function(){
        menu = switchMenu("marketplace_loja");
        changeMarket();
    });

    $("#return").click(function(){
        menu = switchMenu("main");
    });

    $("#visit1").click(function(){
        menu = switchMenu("marketplace_venda");
        changeMarket();
    });

    $("#return2").click(function(){
        menu = switchMenu("main");
    });

    $("#fecharPop").click(function(){
        menu = switchMenu("main");
        $(".popup").css("display", "none");
    });

    function changeInventory(){
        $("#money").html("Dinheiro: 💲" + money);
    }

    function changeMarket(){
         if(money >= autoChopperPrice){
            $("#autoChopper").css("display", "block");
            if(autoLogPlus>=1){
                $("#autoChopper").css("display", "none");
            }
        }else{
            $("#autoChopper").css("display", "none");
        }

        if(money >= pickaxePrice && pickaxes<1){
            $("#buyPickaxe").css("display", "block");
        }else{
            $("#buyPickaxe").css("display", "none");
        }

        if(money >= brocaPrice && broca<1){
            $("#buyBroca").css("display", "block");
        }else{
            $("#buyBroca").css("display", "none");
        }

        if(money >= autoMinerPrice && pickaxes>=1){
            $("#autoMiner").css("display", "block");
            if(autoDiamPlus>=1){
                $("#autoMiner").css("display", "none");
            }
        }else{
            $("#autoMiner").css("display", "none");
        }

        if(money >= autoBrocaPrice && broca>=1){
            $("#autoBroca").css("display", "block");
            if(autoEsmerPlus>=1){
                $("#autoBroca").css("display", "none");
            }
        }else{
            $("#autoBroca").css("display", "none");
        }

        if(money >= melhoriaLogPrice && autoLogPlus>=1){
            $("#madeirax2").css("display", "block");
            if(melhoriaLog>=1){
                $("#madeirax2").css("display", "none");
            }
        }else{
            $("#madeirax2").css("display", "none");
        }
    }

    function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }
});