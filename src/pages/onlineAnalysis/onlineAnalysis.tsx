import AppBarLayout from '@/layout/appBarNaviLayout/appBarNaviLayout';
import { Input, Form, Button, Upload, Modal, message } from 'antd';
import { connect, Dispatch } from 'dva';
import { PlusOutlined } from '@ant-design/icons';

import AppBar from '@/component/AppBar/AppBar_navi';

import './index.less';
import { useState } from 'react';

interface OnlineAnalysisProps {
  block: any;
  history: any;
  dispatch: Dispatch;
}

const { TextArea } = Input;
const { Item } = Form;

const prefix = 'analysis-';

function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const OnlineAnlysis = (props: OnlineAnalysisProps) => {
  const { dispatch } = props;

  const [text, setText] = useState('');
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const handlesubmit = () => {
    const draws = fileList.map((file: any) => file?.preview);
    if (text === '' && draws.length === 0) {
      message.info('请和我们分享些什么吧!');
      return;
    }
    const block = {
      day: '今天',
      date: '210',
      draws,
      content: text,
    };
    dispatch({
      type: 'home/addBlock',
      payload: [block, ...props.block],
    });

    message.success('发布成功!');
    setTimeout(() => {
      props.history.goBack();
    }, 500);
  };

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  const handleDraws = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
  };

  const FormTab = (
    <Form>
      <Item>
        <TextArea
          rows={10}
          style={{ resize: 'none' }}
          placeholder="我们在倾听..."
          value={text}
          onChange={(e: any) => setText(e.target.value)}
        />
      </Item>
      <Item>
        <Upload
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={({ fileList }: any) => {
            setFileList(fileList);
            handleDraws(fileList[fileList.length - 1]);
          }}
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Item>
      <Item>
        <Button type="primary" onClick={handlesubmit}>
          提交
        </Button>
      </Item>
    </Form>
  );

  return (
    <AppBarLayout appBar={<AppBar history={props.history} />}>
      <div className={prefix + 'container'}>{FormTab}</div>
      <Modal
        visible={previewVisible}
        title={'预览'}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </AppBarLayout>
  );
};

export default connect(({ home }: any) => ({
  block: home.blocks,
}))(OnlineAnlysis);
