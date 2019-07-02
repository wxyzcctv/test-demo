import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = mount(Counter);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
