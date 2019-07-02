import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
// 这里的@符号就表示了src的相对路径

describe("HelloWorld.vue", () => {
  // describe就表示测试集,其中HelloWord.vue是测试集的名称
  // 后面的函数表示的是测试方法,其中每一个it表示的是一个最小的单元测试集
  it("renders props.msg when passed", () => {
    // 同样第一个参数表示的是这个最小单元测试的描述或者名称
    // 后面的函数表示的是一个校验的方法
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    // shallowMount表示的是浅渲染，这里的浅渲染表示的是不会对这个组件深层次的组件进行渲染
    // shallowMount换为了Mount之后就能进行深层渲染了，第一个参数是要测试的组件
    // 第二个参数是传入的参数比如：<HelloWorkd masg="new message">
    expect(wrapper.text()).toMatch(msg);
    // 这里表示断言的意思，希望测试中的值和设置的值是一样的
  });
});
