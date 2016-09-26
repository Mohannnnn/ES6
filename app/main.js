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
        array.forEach((v) => console.log(v));

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

        //10.module------------------------模块

        //传统写法requirejs
            //content.js
            define('content.js',function(){
                return 'A cat';
            })
            //index.js
            require(['./content.js'],function(animal){
                console.log(animal);
            })

        //commonjs写法
            //content.js
            module.exports = 'A cat';
            //index.js
            var animal = require('./content.js');

        //ES6语法
            //content.js
            export default 'A cat';
            //index.js
            import animal from './content.js';

        //ES6其他高级用法
            //content.js
            export default 'A cat'
            export function say() {
                return 'Hello!'
            }
            export const type = 'dog'

            //index.js
            import animal, {say , type} from './content'
            let says = say()
            console.log(`The ${type} says ${says} to ${animal}`)
            //注意：大括号中的变量名必须要与被导入模块的外接的名称相同,import写在外面的为默认值

            //模块的整体加载
            import animal, * as content from './content'
            let says = content.say()
            console.log(`The ${content.type} says ${says} to ${animal}`)


        //ES6和CommonJS模块完全不同。CommonJS模块输出的是一个值得拷贝，而ES6模块输出的是值的引用。即循环加载模块的时候，CommonJS是不会影响的，而ES6是会相互影响的。
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
