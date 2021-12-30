const path = require("path");
const fs = require("fs");
const { EventType } = require("../../../constants");

const IDENTIFY_TOPICS = {
  CUSTOMERS_CREATE: "customers_create",
  CUSTOMERS_UDPATE: "customers_update"
};

// Mapping from shopify_topic --> Rudder Ecom Event
const ECOM_TOPICS = {
  checkout_create: "Checkout Started",
  order_udpated: "Order Updated"
};

const identifyMappingJSON = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "data", "identifyMapping.json"))
);

const productMappingJSON = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "data", "productMapping.json"))
);

const INTEGERATION = "SHOPIFY";

const MAPPING_CATEGORIES = {
  [EventType.IDENTIFY]: identifyMappingJSON,
  [EventType.TRACK]: productMappingJSON
};

module.exports = {
  ECOM_TOPICS,
  IDENTIFY_TOPICS,
  INTEGERATION,
  MAPPING_CATEGORIES
};
