import Layout from '@/components/common/Layout';
import { useProfileStore } from '@/components/store/profileStore';

import * as styles from '@/styles/profile.css';

import { NextPageWithLayout } from '../_app';
import Image from 'next/image';
import Input from '@/components/common/Input';
import { useForm } from 'react-hook-form';
import { IFormValues } from '@/types/form';
import { theme } from '@/styles/theme.css';
import Button from '@/components/common/Button';

import { useEffect } from 'react';

const Profile: NextPageWithLayout = () => {
  const currentProfile = useProfileStore((state) => state.currentProfile);
  const { register, setValue } = useForm<IFormValues>();

  useEffect(() => {
    if (currentProfile) {
      for (const key in currentProfile) {
        setValue(key, currentProfile[key]);
      }
    }
  }, [currentProfile]);
  return (
    <>
      <main>
        {currentProfile && (
          <>
            <div
              style={{
                fontSize: 20,
              }}
            >
              프로필
            </div>
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                alignItems: `left`,
                padding: 24,
                marginTop: 12,
                borderRadius: 24,
                boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.1)`,
              }}
              className={styles.cardsWrapper}
              key={currentProfile.nickname}
            >
              <div
                style={{
                  display: `flex`,
                  justifyContent: `center`,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    position: `relative`,
                    width: 100,
                    height: 100,
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    borderRadius: `100%`,
                    border: '1px solid #E5E5E5',
                    overflow: `hidden`,
                  }}
                >
                  <Image
                    style={{
                      objectFit: `cover`,
                    }}
                    src={
                      (currentProfile.profile &&
                        URL.createObjectURL(
                          currentProfile.profile[0] as any,
                        )) ||
                      `/profile_default.svg`
                    }
                    alt="Profile Avatar"
                    fill
                  />
                </div>
              </div>
              <div
                style={{
                  marginBottom: 8,
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    marginBottom: 2,
                  }}
                >
                  닉네임
                </p>
                <Input
                  label="nickname"
                  register={register}
                  type="text"
                  placeholder="d"
                />
              </div>
              <div
                style={{
                  marginBottom: 8,
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    marginBottom: 2,
                  }}
                >
                  한줄소개
                </p>
                <Input
                  label="introduce"
                  register={register}
                  type="text"
                  placeholder="d"
                />
              </div>
              <div>
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      marginBottom: 2,
                    }}
                  >
                    이메일
                  </p>
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    <label
                      htmlFor="email"
                      style={{
                        display: `flex`,
                        justifyContent: `center`,
                        alignItems: `center`,
                        width: 38,
                        height: 38,
                        marginRight: theme.space.xs,
                        backgroundColor: theme.colors.grey[100],
                        borderRadius: theme.radii.sm,
                      }}
                      className={styles.label}
                    >
                      <Image
                        src="/icons/mail.svg"
                        width={20}
                        height={24}
                        alt="portfolio"
                      />
                    </label>
                    <Input
                      label="email"
                      register={register}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@witi.com"
                    />
                  </div>
                  <div
                    style={{
                      width: `100%`,
                      height: 8,
                    }}
                  />
                  <p
                    style={{
                      fontSize: 14,
                      marginBottom: 2,
                    }}
                  >
                    연락처
                  </p>
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    <label
                      htmlFor="phone"
                      style={{
                        display: `flex`,
                        justifyContent: `center`,
                        alignItems: `center`,
                        width: 38,
                        height: 38,
                        marginRight: theme.space.xs,
                        backgroundColor: theme.colors.grey[100],
                        borderRadius: theme.radii.sm,
                      }}
                      className={styles.label}
                    >
                      <Image
                        src="/icons/phone.svg"
                        width={20}
                        height={24}
                        alt="portfolio"
                      />
                    </label>
                    <Input
                      label="phone"
                      register={register}
                      id="phone"
                      name="phone"
                      type="phone"
                      placeholder="12345678"
                    />
                  </div>
                  <div
                    style={{
                      width: `100%`,
                      height: 28,
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: 16,
              }}
            >
              <Button>텍스트 추가</Button>
            </div>
          </>
        )}
      </main>
    </>
  );
};

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Profile;
