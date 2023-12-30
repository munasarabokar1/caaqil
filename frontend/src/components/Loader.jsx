import { IonHeader, IonProgressBar, IonSkeletonText, IonTitle, IonToolbar } from '@ionic/react';

const Loader = () => {
  return (
    <IonHeader>
    <IonToolbar>
      <>
      <IonSkeletonText animated={true} style={{ width: '100%' , height:'47px' }}></IonSkeletonText>
      </>
      <IonProgressBar type="indeterminate" color="dark"></IonProgressBar>
    </IonToolbar>
  </IonHeader>
  );
};

export default Loader;
