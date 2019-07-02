import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";
import sinon from "sinon";

describe("Counter.vue", () => {
  const change = sinon.spy();
  // 使用sinon的一个间谍功能来替换change事件，
  // 这个间谍事件最终可以完全替换按钮触发的change事件
  const wrapper = mount(Counter,{
    listeners: {
      change
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
    expect(change.called).toBe(true);
    // 当按钮被点击了，可以判断间谍事件被触发了
    button.trigger("click");
    expect(change.callCount).toBe(2);
    // 当按钮被按下了之后，可以间谍事件被触发的次数，当然可能还有很多其他的功能
  });
});
