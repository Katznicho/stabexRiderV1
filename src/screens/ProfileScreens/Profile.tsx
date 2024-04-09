import { ScrollView } from 'react-native';
import React, { useState } from 'react';
import HeadProfileCard from '../../components/HeadProfileCard';
import ProfileDetailsCard from '../../components/ProfileCardDetails';
import { generalStyles } from '../utils/generatStyles';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RootState } from '../../redux/store/dev';
import { useSelector } from 'react-redux';

const Profile = () => {

  const { isGuest } = useSelector((state: RootState) => state.user);

  const [profile_details,] = useState([
    {
      name: 'Edit Profile',
      screen: 'EditProfile',
    },
    {
      name: 'Private Policy',
      screen: 'PrivatePolicy',
    },
    {
      name: "Share App",
      screen: "Share App"
    },
    {
      name: 'About Us',
      screen: 'AboutUs',
    },
    {
      name: 'Support',
      screen: 'Support',
    },
    // Conditionally render "Sign Out" based on user authentication
    isGuest ? null : {
      name: 'Sign Out',
      screen: 'Sign Out',
    },
  ].filter(Boolean)); // Filter out null values

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <KeyboardAwareScrollView
      style={[{ flex: 1, width: '100%' }, generalStyles.ScreenContainer]}
      keyboardShouldPersistTaps="always"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        keyboardShouldPersistTaps="always"
      >
        {/* header profile card */}
        <HeadProfileCard />
        {/* header profile card */}

        {/* profile details */}
        <ProfileDetailsCard
          details={profile_details}
          showSwitch={false}
        />
        {/* profile details */}
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default Profile;
