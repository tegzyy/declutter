import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Flex, Image, Input, Spinner, Text } from '@chakra-ui/react';
import UploadIcon from './upload.svg';

const ImageUploader = ({ cloudName, uploadPreset, onImagesUpload, setLoading, loading, max }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    if(selectedImages?.length > 0) {
        uploadImages(selectedImages)
    }
  }, [selectedImages])

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, max);
    setSelectedImages(files);
  };

  const uploadImages = async () => {
    setLoading(true)
    const uploadedImageUrls = [];

    for (const image of selectedImages) {
        const formData = new FormData();
        formData.append('upload_preset', 'jmrkiyu0');
        formData.append('file', image);

        try {
            const response = await axios.post(
            `https://api.cloudinary.com/v1_1/declutters/image/upload`,
            formData
            );

            if (response.data && response.data.secure_url) {
            uploadedImageUrls.push(response.data.secure_url);
            }
        } catch (error) {
            console.error('Error uploading image: ', error);
        } finally {
            setLoading(false)
        }
    }
    onImagesUpload(uploadedImageUrls);
  };

  return (
    <Flex position={"relative"} height={"100px"} alignItems={"center"} borderRadius={"8px"} width={"100%"} border="1px dashed #D0D5DD" cursor={"pointer"} boxSizing='border-box' padding={"1rem"}>
      <Image src={UploadIcon} />
      {loading ? 
      <Text ml="1rem" color={"#344054"} fontSize={".9rem"} whiteSpace={"nowrap"}>Processing {max > 1 ? "images" : "image"} <Spinner transform={"translateY(10px)"} ml=".3rem" size={"xs"} /></Text>
      :
      <Text ml="1rem" color={"#344054"} fontSize={".9rem"} whiteSpace={"nowrap"}>Upload {max > 1 ? "images" : "image"} here {max < 10 && `(max ${max})`}</Text>}
      {!loading === true && <Input style={{height: "100%", cursor: "pointer", opacity: "0", position: "absolute", left: "0"}} type="file" multiple maxLength={2} onChange={handleImageChange} />}
      {/* <button onClick={uploadImages}>Upload Images</button> */}
    </Flex>
  );
}

export default ImageUploader;
