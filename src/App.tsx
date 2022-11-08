import Modal from './components/Modal';
import Button from './components/Button';

const App = () => (
  <div className="flex space-x-2 p-2">
    <Modal
      trigger={<Button palette="warning">Modal 1</Button>}
      title="Demo Modal 1"
      description="Modal description"
      icon="beaker"
      headerButtons={[
        <Button>Button 1</Button>,
        <Button>Button 2</Button>,
        <Button>Button 3</Button>,
      ]}
      footerButtons={[<Button>Button 1</Button>, <Button>Button 2</Button>]}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nulla doloribus omnis
        quas animi necessitatibus molestias quo rerum, laboriosam laudantium quidem commodi amet
        culpa tempore in ratione enim ad voluptates?
      </p>
    </Modal>
    <Modal
      trigger={<Button palette="success">Modal 2</Button>}
      title="Demo Modal 2"
      icon="signal"
      headerButtons={[<Button>Button 1</Button>, <Button>Button 2</Button>]}
      footerButtons={[<Button>Button 1</Button>]}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nulla doloribus omnis
        quas animi necessitatibus molestias quo rerum, laboriosam laudantium quidem commodi amet
        culpa tempore in ratione enim ad voluptates?
      </p>
    </Modal>
    <Modal
      trigger={<Button palette="primary">Buttonless modal</Button>}
      title="Demo Modal 2"
      icon="cake"
    >
      <p>Modal content</p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nulla doloribus omnis quas
      animi necessitatibus molestias quo rerum, laboriosam laudantium quidem commodi amet culpa
      tempore in ratione enim ad voluptates?
    </Modal>
    <Modal
      trigger={<Button palette="secondary">Modal with buttonless header</Button>}
      title="Demo Modal 2"
      description="Modal description"
      icon="beaker"
      footerButtons={<Button>Button 1</Button>}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nulla doloribus omnis
        quas animi necessitatibus molestias quo rerum, laboriosam laudantium quidem commodi amet
        culpa tempore in ratione enim ad voluptates?
      </p>
    </Modal>
    <Modal
      trigger={<Button palette="danger">Modal with buttonless footer</Button>}
      title="Demo Modal 2"
      description="Modal description"
      icon="cake"
      headerButtons={<Button>Button 1</Button>}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nulla doloribus omnis
        quas animi necessitatibus molestias quo rerum, laboriosam laudantium quidem commodi amet
        culpa tempore in ratione enim ad voluptates?
      </p>
    </Modal>
  </div>
);

export default App;
