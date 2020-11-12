import attributesMapper from "./attributesMapper";

describe("attributesMapper", () => {
  test("returns an object of attributes if only data topic id passed", () => {
    const widgetDiv = document.createElement("div");
    widgetDiv.setAttribute("data-topic-id", "0001");
    expect(attributesMapper(widgetDiv)).toStrictEqual({
      language: null,
      topicId: "0001",
      topicName: null,
    });
  });

  test("returns an object of attributes if only data topic name passed", () => {
    const widgetDiv = document.createElement("div");
    widgetDiv.setAttribute("data-topic-name", "Name");
    expect(attributesMapper(widgetDiv)).toStrictEqual({
      language: null,
      topicId: null,
      topicName: "Name",
    });
  });

  test("returns an object of attributes if data topic id, name and location passed", () => {
    const widgetDiv1 = document.createElement("div");
    widgetDiv1.setAttribute("data-topic-id", "0001");
    widgetDiv1.setAttribute("data-topic-name", "Topic Name");
    widgetDiv1.setAttribute("data-language", "uk");
    expect(attributesMapper(widgetDiv1)).toStrictEqual({
      language: "uk",
      topicId: "0001",
      topicName: "Topic Name",
    });
  });
});
