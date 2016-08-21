var React = require('react');
var ReactDOM = require('react-dom');

//var AppComponent = require('./components/productBox.jsx');

/*--------------------React+wbpack+ES6语法--------------------------*/

var Hello = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount : function () {

        //1.-------------------------箭头操作符
        var array = [1,2,3];
        array.forEach(v => console.log(v));

        //2.-------------------------类
        class Animal {
            constructor (name) {
                this.name = name;
            }
            //方法
            sayName() {
                console.log('my name is ' + this.name);
            }
        }

        class Programmer extends Animal {
            constructor (name) {
                super(name);
            }
            program () {
                console.log('Im wuhan');
            }
        }

        var animal = new Animal('wuhan1'),
            program = new Programmer('wuhan2');
        animal.sayName();
        program.sayName();
        program.program();


        //3.-------------------------增强的对象字面量
        var human = {
            breathe() {
                console.log('breathing...');
            }
        };
        var worker = {
            __proto__: human, //设置此对象的原型为human,相当于继承human
            company: 'freelancer',
            work() {
                console.log('working...');
            }
        };
        human.breathe();//输出 ‘breathing...’
        //调用继承来的breathe方法
        worker.breathe();//输出 ‘breathing...’

        //4.-----------------------------字符串模板 ` ${}`
        var num=Math.random();
            //将这个数字输出到console
        console.log(`your num is ${num}`);

        //5.--------------------------参数默认值，不定参数，拓展参数
        //默认参数
        function sayHello(name){
            //传统的指定默认参数的方式
            var name=name||'dude';
            console.log('Hello '+name);
        }
        //运用ES6的默认参数
        function sayHello2(name='dude'){
            console.log(`Hello ${name}`);
        }
        sayHello();//输出：Hello dude
        sayHello('Wayou');//输出：Hello Wayou
        sayHello2();//输出：Hello dude
        sayHello2('Wayou');//输出：Hello Wayou

        //不定参数
        //将所有参数相加的函数
        function add(...x){
            return x.reduce((m,n)=>m+n);
        }
        //传递任意个数的参数
        console.log(add(1,2,3));//输出：6
        console.log(add(1,2,3,4,5));//输出：15

        //6.--------------------------------let和const关键词
        //let让定义变量只能在定义范围内使用，const是定义常量
        for (let i=0;i<2;i++)console.log(i);//输出: 0,1
        //console.log(i);输出：undefined,严格模式下会报错

        //7.------------------------------for of遍历
        //for in遍历的时候是提供它的序号，而for of是提供它的值
        //var someArray = [1,2,3,4];
        //for (value of someArray) {
        //    console.log(value);
        //}

        //8.------------------------------模块
        //ES6中可以使用模块了

        //9.-----------------------------Promises操作
        //创建promise
        var promise = new Promise(function(resolve, reject) {
            // 进行一些异步或耗时操作
            if ( success/*如果成功 */ ) {
                resolve("Stuff worked!");
            } else {
                reject(Error("It broke"));
            }
        });
        //绑定处理程序
        promise.then(function(result) {
            //promise成功的话会执行这里
            console.log(result); // "Stuff worked!"
        }, function(err) {
            //promise失败会执行这里
            console.log(err); // Error: "It broke"
        });

    },
    render : function () {
        return (
        <div>
        </div>
        );
    }
});

ReactDOM.render(
    <Hello ></Hello>,
    document.getElementById('content')
);
