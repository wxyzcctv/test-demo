import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  let isCalled = false;
  const wrapper = mount(Counter,{
    listeners: {
      change() {
        isCalled = true;
      }
    }
    // 这里就添加了监听功能，这个功能是为了监听事件事件是否被触发了，
    // 前面定义触发的是change事件，测试的时候，
    // 当这个change事件被触发之后就令isCalled为true
  });
  it("renders counter.html", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("counter++", () => {
    const button = wrapper.find("button");
    button.trigger("click");
    // 这个地方就是去触发按钮点击按下的意思
    expect(wrapper.vm.count).toBe(1);
    expect(isCalled).toBe(true);
  });
});
