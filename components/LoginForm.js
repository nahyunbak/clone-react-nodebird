import { Form, Input } from 'antd';
import Link from 'next/link';

const LoginForm =() =>{
    const onChangeId = useCallback((e)=>{
        setId(e.target.value);
    });
    const onChangedPassword = useCallback(e)
    return (
        <Form>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name ="user-id" value={id} onChange={onChangeId} required/>;
            </div>
            <div>
                <label htmlFor="user-password">아이디</label>
                <br />
                <Input 
                    name ="user-password" 
                    type="password" 
                    value={password}
                    onChange={onChangePassword} 
                    required
                />;
            </div>
            <div>
               <Button type="primary" htmlTyp="submit" loading={false}>로그인</Button>
               <Link href="/siginup"><a><Button>회원가입</Button></a></Link>
            </div>
            
        </Form>
    );
}

export default LoginForm;