import resource from "@/src/api/handler";

const endpoint = {
  index: "/web/contact",
};

export default {
  submit(contact) {
    return resource.post(`${endpoint.index}`, contact);
  },
};
