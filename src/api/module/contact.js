import resource from "../handler";

const endpoint = {
    index: "/web/contact",
};

export default {
    submit(contact) {
        return resource.post(`${endpoint.index}`, contact);
    },
};
