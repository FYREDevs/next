import { sanityClient } from "@sanity/client";

export const client = sanityClient({
  projectId: "uthjnq6m",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skvNlmBXVGK8dhVYVrahlz2EW0a1IfkdKNLbZ4G6mUVo1qGGajCZq1dFRkioFwUxHDhaxWO6d10qUpvkS2LvjjuyaBeZIW0ARrkcTw0jOYmiXC8oIRT3kwY6wHV8ERtjBWI8QzPgf3sBBXYjKX84W0zP9ytKeY4GoQ46WHZQV26hROFS7AhO",
  useCdn: false,
});
