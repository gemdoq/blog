import app from './app.js';
import config from './config/index.js';

const { PORT } = config;

//express app.listen('포트번호',함수) 기능으로 서버열기
app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
});