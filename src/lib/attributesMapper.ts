function attributesMapper(el: HTMLElement) {
  const attrs = el.attributes;
  const topicId = attrs["data-topic-id"] ? attrs["data-topic-id"].value : null;
  const topicName = attrs["data-topic-name"]
    ? attrs["data-topic-name"].value
    : null;
  const language = attrs["data-language"] ? attrs["data-language"].value : null;

  return {
    topicId,
    topicName,
    language,
  };
}

export default attributesMapper;
