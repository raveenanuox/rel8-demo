// plugins/my-plugin/admin/src/components/TranslateButton.js
import React from "react";
import { Button } from "@strapi/design-system/Button";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const TranslateButton = () => {
  const { modifiedData } = useCMEditViewDataManager();
  const location = useLocation();
  const { pathname } = location;

  // Extract the collection type from the pathname
  const collectionType = pathname.split('::')[1].split('.')[0]; // Adjust the index based on your URL structure


  const handleClick = async () => {
    try {
      const selectedLanguage='ar'
      const response = await axios.post(`/api/weather/translate/${selectedLanguage}/${collectionType}`, {
        data: modifiedData,
      });
      console.log("Translation successful:", response.data);
    } catch (error) {
      console.error("Error translating weather data:", error);
    }
  };

  return <Button onClick={handleClick}>Translate to Arabic</Button>;
};

export default TranslateButton;
