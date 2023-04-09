import { shallowMount } from "@vue/test-utils";
import TvSidebar from "@/component/TvSidebar.vue";
import TvLabel from "todovue-label";

describe("TvButton Component", () => {
  it("should matches snapshot", () => {
    const wrapper = shallowMount(TvSidebar);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Render the image correctly when 'isImage' is true.", () => {
    const data = {
      image: {
        src: "https://ejemplo.com/imagen.png",
        alt: "Ejemplo de imagen",
        link: "https://ejemplo.com/pagina",
      },
    };
    const wrapper = shallowMount(TvSidebar, {
      propsData: {
        data,
        isImage: true,
      },
    });
    const imagen = wrapper.find("img");
    expect(imagen.exists()).toBe(true);
    expect(imagen.attributes("src")).toBe(data.image.src);
    expect(imagen.attributes("alt")).toBe(data.image.alt);
  });

  test("The 'data' property has the default value of an empty object.", () => {
    const wrapper = shallowMount(TvSidebar);
    expect(wrapper.vm.data).toEqual({});
  });

  test("The 'linkTag' property has the default value of \"router-link\".", () => {
    const wrapper = shallowMount(TvSidebar);
    expect(wrapper.vm.linkTag).toBe("router-link");
  });

  test("The 'isImage' property has the default value of 'false'.", () => {
    const wrapper = shallowMount(TvSidebar);
    expect(wrapper.vm.isImage).toBe(false);
  });

  test("The TvLabel component is being imported correctly.", () => {
    const wrapper = shallowMount(TvSidebar);
    expect(wrapper.findComponent(TvLabel)).toBeTruthy();
  });

  test("The 'limitedList' method returns an empty array when the corresponding property in 'data' is null or undefined.", () => {
    const wrapper = shallowMount(TvSidebar);
    expect(wrapper.vm.limitedList("labels")).toEqual([]);
  });

  test("The 'limitedList' method returns an array with limited elements when the 'limit' property is greater than zero.", () => {
    const data = {
      list: [
        { id: 1, title: "Item 1", link: "/item/1" },
        { id: 2, title: "Item 2", link: "/item/2" },
        { id: 3, title: "Item 3", link: "/item/3" },
      ],
    };
    const limit = 2;
    const wrapper = shallowMount(TvSidebar, {
      propsData: {
        data,
        limit,
      },
    });
    expect(wrapper.vm.limitedList("list")).toHaveLength(limit);
  });

  test("The 'clickLabel' event is emitted correctly when a label is clicked.", () => {
    const label = { id: 1, name: "Etiqueta", color: "#f00" };
    const wrapper = shallowMount(TvSidebar);
    wrapper.vm.clickLabel(label);
    expect(wrapper.emitted().clickLabel).toBeTruthy();
    expect(wrapper.emitted().clickLabel[0][0]).toBe(label);
  });
});
