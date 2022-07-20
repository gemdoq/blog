import express from 'express';
import mongoose from 'mongoose';
import config from './config/index.js';
import hpp from 'hpp';
import helmet from 'helmet';
import cors from 'cors';

//Routes
import postRoutes from './routes/api/post.js';
import userRoutes from './routes/api/user.js';
import authRoutes from './routes/api/auth.js';

import morgan from 'morgan';

const app = express();
const { MONGO_URI } = config;

// 서버의 보안문제를 보완하기 위한 라이브러리들 사용
app.use(hpp());
app.use(helmet());
// cors origin은 허락하고자 하는 주소값, cors credential 모드를 사용(true)
app.use(cors({origin: true, credentials: true}));
app.use(morgan('dev'));
// morgan은 콘솔에서 요청과 응답에 대한 정보를 기록하는 라이브러리
app.use(express.json());


mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
    })
    .then(()=> console.log('MongoDB connecting Success!'))
    .catch((e)=> console.log(e));

// use routers
app.get('/');
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

export default app;