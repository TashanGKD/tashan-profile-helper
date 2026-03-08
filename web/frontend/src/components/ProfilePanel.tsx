import ReactMarkdown from "react-markdown";
import { getDownloadUrl, getForumDownloadUrl } from "../api";

interface ProfilePanelProps {
  sessionId: string | null;
  profile: string;
  forumProfile: string;
}

export function ProfilePanel({
  sessionId,
  profile,
  forumProfile,
}: ProfilePanelProps) {
  if (!sessionId) return null;

  return (
    <div className="profile-panel">
      <section className="profile-safety-notice">
        用户画像仅在本次对话中临时生成。系统不会在任何位置保存该画像或您的任何隐私信息。您可以自行下载并本地保存。
      </section>
      <section className="profile-section">
        <h3>科研数字分身</h3>
        <div className="profile-content">
          {profile ? (
            <ReactMarkdown>{profile}</ReactMarkdown>
          ) : (
            <p className="profile-empty">尚未建立科研数字分身，可以说「帮我建立分身」开始。</p>
          )}
        </div>
        <a
          href={getDownloadUrl(sessionId)}
          download="profile.md"
          className="profile-download-btn"
        >
          下载科研数字分身
        </a>
      </section>

      <section className="profile-section">
        <h3>他山论坛分身</h3>
        <div className="profile-content">
          {forumProfile ? (
            <ReactMarkdown>{forumProfile}</ReactMarkdown>
          ) : (
            <p className="profile-empty">尚未生成他山论坛分身，可以说「生成他山论坛分身」或「数字分身」。</p>
          )}
        </div>
        <a
          href={getForumDownloadUrl(sessionId)}
          download="forum-profile.md"
          className={`profile-download-btn ${forumProfile ? "" : "profile-download-btn-disabled"}`}
        >
          下载他山论坛分身
        </a>
      </section>
    </div>
  );
}
