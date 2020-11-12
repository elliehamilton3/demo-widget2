function attributesMapper(el: HTMLElement) {
  const attrs = el.attributes;
  const topicId = attrs["data-topic-id"].value || null;
  const topicName = attrs["data-topic-name"] || null;
  const location = attrs["data-location"] || null;

  return {
    topicId,
    topicName,
    location,
  };
}

export default attributesMapper;
