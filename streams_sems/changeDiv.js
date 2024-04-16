let topic_content=document.getElementById('topic_content');
let pdf_section=document.getElementById('pdf_section');
let lecture_section=document.getElementById('lecture_section');
let pyq_section=document.getElementById('pyq_section');
let doubt_section=document.getElementById('doubt_section');

topics.addEventListener('click',()=>{
    topic_content.style.display='flex';
    pdf_section.style.display='none';
    lecture_section.style.display='none';
    pyq_section.style.display='none';
    doubt_section.style.display='none';
});

pdfs.addEventListener('click',()=>{
    topic_content.style.display='none';
    pdf_section.style.display='block';
    lecture_section.style.display='none';
    pyq_section.style.display='none';
    doubt_section.style.display='none';
});

videolectures.addEventListener('click',()=>{
    topic_content.style.display='none';
    pdf_section.style.display='none';
    lecture_section.style.display='block';
    pyq_section.style.display='none';
    doubt_section.style.display='none';
});

pyq.addEventListener('click',()=>{
    topic_content.style.display='none';
    pdf_section.style.display='none';
    lecture_section.style.display='none';
    pyq_section.style.display='block';
    doubt_section.style.display='none';
});

doubtsolve.addEventListener('click',()=>{
    topic_content.style.display='none';
    pdf_section.style.display='none';
    lecture_section.style.display='none';
    pyq_section.style.display='none';
    doubt_section.style.display='block';
});
