import { mount } from "@vue/test-utils";
import QrCard from "@/components/QrCard";

describe("QrCard.vue", () => {
    it("Card should has correct heading and paragraph content", () => {
        const wrapper = mount(QrCard);
        const h1Text = "Improve your front-end skills by building projects";
        const pText = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";
    
        expect(wrapper.find("h1").text()).toBe(h1Text);
        expect(wrapper.find("p").text()).toBe(pText);
    });
});
