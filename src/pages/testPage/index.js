import {connect} from "dva"
import { Form,Button,Row,Col } from "antd";
import styles from "./index.less";

const FormItem = Form.Item;
// 只要state或props变化，就会重新渲染

// 控制formItem里2个的比例
const formItemLayout = {
    labelCol:{
        sm:{span:6},// 小屏占6份
        md:{span:8}
    },
    wrapperCol:{
        sm:{span:18},// 小屏占18份
        md:{span:16}
    }
}

const TestPage =(props)=>{
    //解构赋值，把下面mapStateToProps方法return的数据，取出来。 经过connect的，dispatch自动变成组件的props
    const {num,shoppingStore,dispatch}=props;

    const addClick = ()=>{
        // dispatch方法接收一个对象，整个对象称作action
        //type必须要有,固定写法“命名空间/方法名”,可以理解为触发该命名空间中某个方法，给方法传递参数可以在后面写key:value形式，没有可以不写
        dispatch({
            type:"testPage/addNum" // testPage是models层的其中一个命名空间名字，addNum是该model中的方法。
        })
    }

    const showShopping = ()=>{
        dispatch({
            type:"testPage/shoppingWZ",
            who:"购物网站：",// 给shoppingWZ方法传递了who这个参数
            // 参数2:值 //多个参数可以写多个
        })
    }
    
    return (
    <Row>
        <Col ms={24} md={8} lg={8}>
            <FormItem {...formItemLayout} label="没经过后台的">
                <span>{num}</span>
            </FormItem>
        </Col>
        <Col ms={24} md={8} lg={8}>
            <FormItem {...formItemLayout} label="后台返回的">
                <span>{shoppingStore}</span>
            </FormItem>
        </Col>
        <Col ms={24} md={8} lg={8}>
            <Button type="primary" onClick={addClick} className={styles.btn}>没经过后台的+1</Button>
            <Button type="primary" onClick={showShopping}>查看后台返回的数据</Button>
        </Col>
    </Row>)         
}

function mapStateToProps (state) {
    // 这个state是所有model层的state，这里只用到其中一个，所以state.testPage把命名空间为testPage这个model层的state数据取出来
    // es6语法解构赋值
    const { num,shoppingStore } = state.testPage;
    // 这里return出去的数据，会变成此组件的props，在组件可以通过props.num取到。props变化了，会重新触发render方法，界面也就更新了。
    return {
        num,
        // num:num, //同上，es6语法，key/value相同名时可以简写。
        shoppingStore,
    }
}

// function mapDispatchToProps (dispatch) {
    // 代码
// }

// connect方法用来连接models层的state数据，接受2个参数(都是方法)，第一个mapStateToProps，第二个mapDispatchToProps
// mapStateToProps按字面意思：把models层state数据变为组件的props
// mapDispatchToProps：用了此方法，dispatch只会在此方法里。不写该参数，dispatch会作为组件的props。(我平常用几乎不写该方法)
// export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
export default connect(mapStateToProps)(TestPage);