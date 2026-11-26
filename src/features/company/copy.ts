import { useCopy } from "@/i18n/useCopy";
import { useTranslation } from "react-i18next";

const vietnamese: Record<string, string> = {
  "About Primitive AI": "Về Primitive AI",
  "More potential.": "Phát huy tiềm năng.",
  "More productive": "Nâng cao năng suất",
  "organizations.": "cho tổ chức.",
  "We build practical AI around the work organizations need to get done.":
    "Chúng tôi xây dựng AI cho những công việc mà các tổ chức cần hoàn thành mỗi ngày.",
  "Explore the Primitive AI journey": "Xem hành trình Primitive AI",
  "Founded in 2023": "Thành lập năm 2023",
  "Doan Nguyen, founder of Primitive AI.": "Doan Nguyen, nhà sáng lập Primitive AI.",
  "Founder of Primitive AI": "Nhà sáng lập Primitive AI",
  "Our story": "Câu chuyện của chúng tôi",
  "Our journey": "Hành trình của Primitive AI",
  "Experience building systems for FDI and Vietnamese organizations brought operational inefficiency into focus.":
    "Kinh nghiệm xây dựng hệ thống cho doanh nghiệp có vốn đầu tư nước ngoài và doanh nghiệp Việt Nam giúp chúng tôi hiểu rõ những vướng mắc trong vận hành.",
  "How can AI help our organizations become productive enough to catch up?":
    "AI có thể giúp các tổ chức của chúng ta nâng cao năng suất để bắt kịp như thế nào?",
  "Our founding conviction": "Câu hỏi đặt nền móng cho Primitive AI",
  "Primitive AI is founded": "Thành lập Primitive AI",
  "Primitive AI is founded to turn practical AI experience into useful solutions for organizations.":
    "Công ty ra đời để chuyển kinh nghiệm ứng dụng AI thành những giải pháp hữu ích cho các tổ chức.",
  "Early computer-vision work applies AI to real settings where people need better visibility into operations.":
    "Những dự án thị giác máy tính đầu tiên đưa AI vào môi trường sản xuất, giúp đội ngũ quan sát hoạt động trên dây chuyền.",
  "Factory production line with computer vision detection markers.":
    "Dây chuyền sản xuất với các vùng nhận diện được đánh dấu bằng thị giác máy tính.",
  "Computer vision in an operating environment": "Thị giác máy tính trong môi trường vận hành",
  "Customer-facing language models raise a central question: how can teams get useful, consistent responses they can trust?":
    "Khi đưa mô hình ngôn ngữ vào hỗ trợ khách hàng, chúng tôi tập trung vào chất lượng phản hồi để đội ngũ nhận được câu trả lời hữu ích, nhất quán và đáng tin cậy.",
  "Work with knowledge and memory explores how an AI system can use relevant organizational information as part of a task.":
    "Qua KnowledgeHub, đội ngũ tìm hiểu cách AI ghi nhớ và sử dụng thông tin liên quan của tổ chức khi thực hiện công việc.",
  "Custom AI development": "Phát triển AI theo yêu cầu",
  "Custom AI work connects models and software to the specific workflows, information and constraints of each project.":
    "Các dự án kết nối mô hình và phần mềm với quy trình, dữ liệu và những giới hạn cụ thể của từng tổ chức.",
  "LegalHub, FamilyHub and EduAssess": "LegalHub, FamilyHub và EduAssess",
  "Distinct product experiences extend the team's work across documents, family knowledge and English assessment.":
    "Các sản phẩm riêng mở rộng công việc của đội ngũ sang rà soát tài liệu, lưu giữ tri thức gia đình và đánh giá năng lực tiếng Anh.",
  "The platform brings knowledge, agents, tools and review together so organizations can shape AI around their work.":
    "Nền tảng kết hợp tri thức, tác nhân, công cụ và các bước kiểm tra để tổ chức cấu hình AI theo công việc của mình.",
  "How we work": "Cách chúng tôi làm việc",
  "What guides the work.": "Những nguyên tắc dẫn dắt công việc",
  "Customer First": "Khách hàng là ưu tiên",
  "Start with a real need and shape the work around the people who will use the result.":
    "Bắt đầu từ nhu cầu thực tế và xây dựng giải pháp cho người sẽ sử dụng kết quả.",
  "Excellence": "Chú trọng chất lượng",
  "Take care with the quality of the product, engineering and collaboration.":
    "Làm kỹ từng phần, từ sản phẩm và kỹ thuật đến cách phối hợp với đội ngũ.",
  "Innovation": "Đổi mới có mục đích",
  "Explore new approaches when they can make a practical difference.":
    "Thử cách tiếp cận mới khi nó có thể cải thiện kết quả công việc.",
  "Responsibility": "Trách nhiệm",
  "Build with clear boundaries, thoughtful review and respect for the people affected.":
    "Đặt giới hạn rõ ràng, kiểm tra các quyết định quan trọng và tôn trọng những người chịu ảnh hưởng.",
  "Explore our products": "Khám phá sản phẩm",
  "Custom AI services": "Xem dịch vụ phát triển AI",
  "From Primitive AI": "Từ Primitive AI",
  "Updates and": "Tin tức và",
  "perspectives.": "góc nhìn.",
  "Product news, community events and how AI is applied to real work.":
    "Cập nhật về sản phẩm, hoạt động cộng đồng và cách AI được ứng dụng vào công việc thực tế.",
  "See the latest update": "Xem cập nhật mới nhất",
  "Read about the Codex Community Hackathon in Hanoi": "Đọc thêm về Codex Community Hackathon tại Hà Nội",
  "Community members gather for a photo at the Codex Community Hackathon at Biblio Book Cafe in Hanoi.":
    "Các thành viên cộng đồng chụp ảnh tập thể tại Codex Community Hackathon ở Biblio Book Cafe, Hà Nội.",
  "Community": "Cộng đồng",
  "Codex Community Hackathon in Hanoi": "Codex Community Hackathon tại Hà Nội",
  "Latest update": "Cập nhật mới nhất",
  "A day of building AI apps in Hanoi.": "Một ngày xây dựng ứng dụng AI tại Hà Nội.",
  "Codex Community Hackathon · AI in Your Palm":
    "Codex Community Hackathon · AI trong lòng bàn tay",
  "At Biblio Book Cafe, teams used Codex to prototype mobile apps with AI features. Each team started with a real user problem and demonstrated its app the same day.":
    "Tại Biblio Book Cafe, các đội dùng Codex để phát triển nguyên mẫu ứng dụng di động có tính năng AI. Mỗi đội bắt đầu với một vấn đề thực tế của người dùng và trình diễn ứng dụng trong ngày.",
  "Doan Nguyen organized the event as a Hanoi Codex Ambassador, with support from Apero.":
    "Đoàn Nguyễn tổ chức sự kiện với vai trò Đại sứ Codex tại Hà Nội, với sự hỗ trợ của Apero.",
  "See event details": "Xem thông tin sự kiện",
  "Follow Primitive AI": "Theo dõi Primitive AI",
  "Get product news and team updates on LinkedIn.":
    "Nhận thông tin về sản phẩm và hoạt động của đội ngũ trên LinkedIn.",
  "Visit Primitive AI on LinkedIn": "Theo dõi trên LinkedIn",
};

export function useCompanyCopy() {
  const fallback = useCopy();
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "en";
  const isVietnamese = language.split("-")[0] === "vi";
  const t = (key: string) => (isVietnamese ? vietnamese[key] : undefined) ?? fallback(key);

  return { t, isVietnamese };
}
