import AppBarLayout from '@/layout/appBarNaviLayout/appBarNaviLayout';
import { Input, Form, Button } from 'antd';

import AppBar from '@/component/AppBar/AppBar_navi';

import './index.less';
import { useState } from 'react';

const { TextArea } = Input;
const { Item } = Form;

const prefix = 'analysis-';

const OnlineAnlysis = (props: any) => {
  const [state, setState] = useState(false);

  const FormTab = (
    <Form>
      <Item>
        <TextArea
          rows={20}
          style={{ resize: 'none' }}
          placeholder="我们在倾听..."
        />
      </Item>
      <Item>
        <Button
          type="primary"
          onClick={() => {
            setState(true);
          }}
        >
          提交
        </Button>
      </Item>
    </Form>
  );

  const AnswerTab = (
    <div>
      <div>
        诗意，是诗人用一种艺术的方式，对于现实或想象的描述与自我感受的表达。在情感立场上，有歌颂的，也有批判的；在表达方式上，有委婉的，也有直抒胸臆的；在形式上，以《诗经》为代表的风雅颂和楚辞为滥觞，而汉代乐府又有所发展。诗意的主要载体，是为唐代达到巅峰的近体诗和古体诗，以及在宋代最流行的词，元代的曲。
      </div>
    </div>
  );

  return (
    <AppBarLayout appBar={<AppBar history={props.history} />}>
      <div className={prefix + 'container'}>{state ? AnswerTab : FormTab}</div>
    </AppBarLayout>
  );
};

export default OnlineAnlysis;
