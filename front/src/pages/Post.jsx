import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Main } from '../components/boarddetail/boarddetail.styled';
import { PostContent, PostTitle, PostBtn } from '../components/post/post.style';
import { PostPlan, ImgUpload } from '../components/post';
import axios from 'axios';

const Post = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const navigate = useNavigate();

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (uploadedFiles.length === 0 || title.trim() === '' || detail.trim() === '') {
      alert('이미지or제목or내용을 입력하세요!');
      return; 
    }
    const formData = new FormData();

    for (let i = 0; i < uploadedFiles.length; i++) {
      formData.append('uploadedFiles', uploadedFiles[i]);
    }
    formData.append('title',title)
    formData.append('detail',detail)
    
    try {
      const response = await axios.post(
        "/post/write",
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': `multipart/form-data`
          }
        }
      );
      const data = response.data;
      if (data === "create success") {
        navigate("/board");
      }
    } catch (error) {
      console.log("여기 못보내짐 에러");
      console.log(error);
    }
    
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };

  const handleFileUpload = (files) => {
    setUploadedFiles(files);
  };
  useEffect(() => {
    console.log(uploadedFiles)
  }, [uploadedFiles])
  return (
    <div>
      postpage
      <Main>
        <ImgUpload name="images" onUpload={handleFileUpload} files={uploadedFiles} />
        <PostTitle
          type="text"
          name="title"
          placeholder="제목을 입력하세요"
          onChange={handleTitleChange}
        />
        <PostContent
          type="text"
          name="detail"
          placeholder="내용을 입력하세요"
          onChange={handleDetailChange}
        />
        <PostPlan />
        <PostBtn onClick={handlePostSubmit}>등록하기</PostBtn>
      </Main>
    </div>
  );
};

export default Post;