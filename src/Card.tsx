import React, { useEffect, useState } from "react";
import styles from "./card.module.css";
import topics from "./topics.json";

export interface CardProps {
  /**
   * The id of the topic to be loaded in the card, if both name and id are provided id is used
   */
  dataTopicId?: string;
  /**
   * The name of the topic to be loaded in the card, if both name and id are provided id is used
   */
  dataTopicName?: string;
  /**
   * The language of the text to be loaded in the card - defaults to english (to be implemented)
   */
  language?: string;
}

interface Topic {
  id: string;
  title: string;
  link: string;
  imageLink: string;
}

/**
 * Card component for loading heading, image and link for a specific topic.
 */
const Card: React.FunctionComponent<CardProps> = ({
  dataTopicId,
  dataTopicName,
}: CardProps) => {
  const [topic, setTopicData] = useState<Topic>();

  if (!dataTopicId && !dataTopicName) return <></>;

  useEffect(() => {
    const getData = async () => {
      // Replace topic data fetching with a call to the API
      // const result = await fetch(
      //   'https://reqres.in/api/users?page=2',
      // )
      // const res = await result.json()

      const topic = topics.find(({ id, title }) => {
        if (dataTopicId) return id === dataTopicId;
        return title === dataTopicName;
      });
      const topicData = await Promise.resolve(topic);

      setTopicData(topicData);
    };
    getData();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h1 className={styles.heading}>Explore context</h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 0 44 44"
            width="32"
          >
            <g fill="#005299">
              <path d="m27 22c.0087848-2.6089233-1.9898467-4.7860819-4.59-5-.539293-2.3576821-1.4687583-4.6086781-2.75-6.66 1.4929511-1.99060151 1.2949937-4.77607413-.4644661-6.53553391s-4.5449324-1.95741722-6.5355339-.46446609c-3.49492933-2.18837605-7.53647192-3.3460735-11.66-3.34h-1v2h1c3.694196.01115897 7.3124408 1.04988953 10.45 3-.2865236.6284313-.4397435 1.30940862-.45 2 0 2.76142375 2.2385763 5 5 5 .6898833-.0071119 1.3708297-.1569201 2-.44 1.0894563 1.7695122 1.8926798 3.6999486 2.38 5.72-2.0064783.7013013-3.3502727 2.5944933-3.3502727 4.72s1.3437944 4.0186987 3.3502727 4.72c-.4873202 2.0200514-1.2905437 3.9504878-2.38 5.72-.6291703-.2830799-1.3101167-.4328881-2-.44-2.7614237 0-5 2.2385763-5 5 .0102565.6905914.1634764 1.3715687.45 2-3.13669408 1.9520583-6.75550417 2.9909511-10.45 3h-1v2h1c4.1103122.0012557 8.13770442-1.1563596 11.62-3.34 1.9906015 1.4929511 4.7760741 1.2949937 6.5355339-.4644661s1.9574172-4.5449324.4644661-6.5355339c1.2980914-2.0483804 2.2444779-4.2994283 2.8-6.66 2.596196-.2188376 4.5892068-2.3946135 4.58-5zm-14-15c0-1.65685425 1.3431458-3 3-3s3 1.34314575 3 3-1.3431458 3-3 3-3-1.34314575-3-3zm6 15c0-1.6568542 1.3431458-3 3-3s3 1.3431458 3 3-1.3431458 3-3 3-3-1.3431458-3-3zm-3 18c-1.6568542 0-3-1.3431458-3-3s1.3431458-3 3-3 3 1.3431458 3 3-1.3431458 3-3 3z" />
              <path d="m11 22c0-6.0751322-4.92486775-11-11-11v2c4.97056267.0000001 8.99999981 4.0294373 8.99999981 9s-4.02943714 8.9999999-8.99999981 9v2c6.07513225 0 11-4.9248678 11-11z" />
              <path d="m37.71 18.71-1.42-1.42-4.7 4.71 4.7 4.71 1.42-1.42-2.3-2.29h8.59v-2h-8.59z" />
              <path d="m29.41 6 2.3-2.29-1.42-1.42-4.7 4.71 4.7 4.71 1.42-1.42-2.3-2.29h14.59v-2z" />
              <path d="m31.71 33.71-1.42-1.42-4.7 4.71 4.7 4.71 1.42-1.42-2.3-2.29h14.59v-2h-14.59z" />
            </g>
          </svg>
        </div>
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.heading}>{topic && topic.title}</h2>
      </div>
      <a href={topic && topic.link} className={styles.cardLink}>
        <img style={{ maxWidth: "100%" }} src={topic && topic.imageLink}></img>
        <div className={styles.cardAction}>
          <p className={styles.body}>
            Explore the latest strategic trends, research and analysis
          </p>
          <div className={styles.linkIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              viewBox="0 0 28 14"
              width="28"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#84919c"
                strokeWidth="2"
                transform="translate(1 1)"
              >
                <path d="m23 6h-22.5" strokeLinecap="square" />
                <path d="m20 0 5 6-5 6" />
              </g>
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

export { Card };
