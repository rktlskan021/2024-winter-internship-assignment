import { useState } from "react";
import ProjectList from "../components/ProjectList";
import styled from "styled-components";
import ReactModal from 'react-modal';
// 프로젝트 명, 테스크, 우선순위, 마감일, 설명

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    flex: 1;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 20px;
    width: 900px;
`;

const Hr = styled.hr`
    size: 3px;
    width: 100%;
    margin: 10px 0 10px 0;
`;

const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const CreateBtn = styled.button`
    position: absolute;
    right: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    right: 10px;
    &:hover {
    background-color: #0056b3;
    }
`;

const AddProjectModal = ({closeModal, addProject}) => {
    const [title, setTitle] = useState('');
    const [explain, setExplain] = useState('');

    const handleAddProject = () => {
        if (title.trim()) {
            addProject(title, explain);
            closeModal();
            setTitle('');
            setExplain('');
        }
    };

    return (
        <ModalDiv>
            <h2>프로젝트 추가</h2>
            <input
                type="text"
                placeholder="프로젝트 이름"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{height:"50px"}}
            />
            <textarea
                placeholder="프로젝트 설명"
                value={explain}
                onChange={(e) => setExplain(e.target.value)}
                style={{height:"50px"}}
            />
            <button onClick={handleAddProject}>프로젝트 추가</button>
            <button onClick={closeModal}>취소</button>
        </ModalDiv>
    );
}

function MainPage(){
    const [id, setId] = useState(5);

    const [projects, setProjects] = useState([
        {id:1, title:"프로젝트 1", explain:"ABCD"},
        {id:2, title:"프로젝트 2", explain:"ABCD"},
        {id:3, title:"프로젝트 3", explain:"ABCD"},
        {id:4, title:"프로젝트 4", explain:"ABCD"},
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const addProject = (title, explain) => {
        const newProject = { id: id, title, explain};
        setId((currunt_id) => currunt_id+1);
        setProjects([...projects, newProject]);
    };

    return (
        <MainDiv>
            <Header>
                <Title>Project DashBoard</Title>
                <CreateBtn onClick={() => {setIsModalOpen(true)}}>프로젝트 생성</CreateBtn>
            </Header>
            <Hr />
            <ProjectList projects={projects} setProjects={setProjects} id={id} setId={setId} />
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                ariaHideApp={false}
            >
                <AddProjectModal
                    closeModal={() => setIsModalOpen(false)}
                    addProject={addProject}
                />
            </ReactModal>
        </MainDiv>
    )
}

export default MainPage;