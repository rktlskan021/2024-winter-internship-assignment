// components/ProjectList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrash } from "react-icons/fa";

const MainDiv = styled.div``;

const ProjectCard = styled.div`
  width: 1080px;
  height: 100px;
  background-color: #d9d9d9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoBox = styled.div`
  width: 900px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  margin: 0;
  font-size: 30px;
`;

const Explain = styled.p`
  margin: 0;
`;

const BtnsDiv = styled.div`
  display: flex;
  gap: 50px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


function ProjectComponent({ title, explain, id, setProjects, projects }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  }

  const handleMouseOut = () => {
    setIsHover(false);
  }

  const deleteProject = () => {
    const deleteProject = projects.filter((e) => e.id !== id);
    setProjects(deleteProject);
  }

  return (
    <MainDiv onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <ProjectCard>
        <InfoBox>
          <Title>{title}</Title>
          <Explain>{explain}</Explain>
          {
            isHover ?
              <BtnsDiv>
                <FaTrash onClick={deleteProject} />
              </BtnsDiv> :
              <BtnsDiv></BtnsDiv>
          }
        </InfoBox>
      </ProjectCard>
    </MainDiv>
  );
}

function ProjectList({ projects, setProjects }) {
  return (
    <Div>
      {
        projects.map((value, key) => {
          return <ProjectComponent title={value.title} explain={value.explain} id={value.id} setProjects={setProjects} projects={projects} />
        })
      }
    </Div>
  );
}

export default ProjectList;
